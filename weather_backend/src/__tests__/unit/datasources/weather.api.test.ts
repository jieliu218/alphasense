import { type Logger } from 'winston';
import { RESTDataSource } from '@apollo/datasource-rest';
import { type KeyValueCache } from '@apollo/utils.keyvaluecache';
import { GraphQLError } from 'graphql';
import { WeatherAPI } from '../../../datasources';

jest.mock('@apollo/datasource-rest');

const mockLogger = {
  error: jest.fn(),
  info: jest.fn()
} as unknown as Logger;

const mockDataSources = {} as any;

describe('WeatherAPI', () => {
  let weatherAPI: WeatherAPI;
  const mockGet = jest.fn();

  beforeEach(() => {
    mockGet.mockReset();

    weatherAPI = new WeatherAPI({
      contextValue: { logger: mockLogger, dataSources: mockDataSources },
      cache: new Map<string, any>() as unknown as KeyValueCache
    });

    jest.spyOn(RESTDataSource.prototype as any, 'get').mockImplementation(mockGet);
  });

  it('successfully fetches weather data', async () => {
    const mockData = { temperature: 20 };

    mockGet.mockResolvedValue(mockData);

    const data = await weatherAPI.getWeatherData(40, -74);

    expect(data).toEqual(mockData);
    expect(mockGet).toHaveBeenCalledWith(
      expect.stringContaining('forecast?latitude=-74&longitude=40')
    );
  });

  it('retries on failure and succeeds', async () => {
    const mockData = { temperature: 20 };

    mockGet.mockRejectedValueOnce(new Error('Network error')).mockResolvedValueOnce(mockData);

    const promise = weatherAPI.fetchWithRetry('forecast?latitude=40&longitude=-74', 2, 1000);

    await expect(promise).resolves.toEqual(mockData);
    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Retrying after 1000ms. Retries left: 1')
    );
    expect(mockGet).toHaveBeenCalledTimes(2);
  });

  it('fails after maximum retries exceeded', async () => {
    mockGet.mockRejectedValue(new Error('Network error'));

    const promise = weatherAPI.fetchWithRetry('forecast?latitude=40&longitude=-74', 2, 1000);

    await expect(promise).rejects.toThrow(GraphQLError);
    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Retrying after 1000ms. Retries left: 1')
    );
    expect(mockLogger.info).toHaveBeenCalledWith(
      expect.stringContaining('Retrying after 1000ms. Retries left: 0')
    );
    expect(mockGet).toHaveBeenCalledTimes(3);
  });
});
