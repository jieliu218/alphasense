import { getWeatherData } from '../../../schema/weather/resolvers/Query/getWeatherData';
import { GraphQLError, type GraphQLResolveInfo } from 'graphql';

// Mock the context's logger and dataSources
const mockLoggerError = jest.fn();
const mockGetWeatherData = jest.fn();

// Mock context
const context = {
  logger: {
    error: mockLoggerError
  },
  dataSources: {
    weatherAPI: {
      getWeatherData: mockGetWeatherData
    }
  }
};

describe('getWeatherData resolver', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('throws an error for invalid latitude', async () => {
    await expect(
      getWeatherData(
        {},
        { latitude: 91, longitude: 0 },
        context,
        {} as unknown as GraphQLResolveInfo
      )
    ).rejects.toThrow(GraphQLError);
    expect(context.logger.error).not.toHaveBeenCalled();
  });

  it('throws an error for invalid longitude', async () => {
    await expect(
      getWeatherData(
        {},
        { latitude: 0, longitude: 181 },
        context,
        {} as unknown as GraphQLResolveInfo
      )
    ).rejects.toThrow(GraphQLError);
    expect(context.logger.error).not.toHaveBeenCalled();
  });

  it('calls the weatherAPI.getWeatherData method with correct parameters', async () => {
    const mockData = { data: 'weather data' };
    mockGetWeatherData.mockResolvedValue(mockData);

    const result = await getWeatherData(
      {},
      { latitude: 40, longitude: -74 },
      context,
      {} as unknown as GraphQLResolveInfo
    );

    expect(result).toEqual(mockData);
    expect(mockGetWeatherData).toHaveBeenCalledWith(-74, 40);
  });

  it('handles errors from the weatherAPI.getWeatherData method', async () => {
    mockGetWeatherData.mockRejectedValue(new Error('API error'));

    await expect(
      getWeatherData(
        {},
        { latitude: 40, longitude: -74 },
        context,
        {} as unknown as GraphQLResolveInfo
      )
    ).rejects.toThrow(Error);
  });
});
