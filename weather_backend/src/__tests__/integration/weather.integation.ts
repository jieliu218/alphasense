import { ApolloServer } from '@apollo/server';
import { type Logger } from 'winston';
import { gql } from 'graphql-tag';
import { typeDefs } from '../../schema/typeDefs.generated';
import { resolvers } from '../../schema/resolvers.generated';
import { type TypeSource, type IResolvers } from '@graphql-tools/utils';
import { type ContextValue } from '../../utils/context';
import { WeatherAPI } from '../../datasources';
import { weatherDummy } from '../../__dummy__/weather.dummy';

const weatherAPI = new WeatherAPI({ contextValue: {} as unknown as ContextValue, cache: {} as any });
const mockLogger = {
  error: jest.fn(),
  info: jest.fn()
} as unknown as Logger;

const GET_WEATHER_DATA = gql`
  query GetWeatherData($latitude: Float!, $longitude: Float!) {
    getWeatherData(latitude: $latitude, longitude: $longitude) {
      latitude
      longitude
      generationtimeMs
      utcOffsetSeconds
      timezone
      timezoneAbbreviation
      elevation
      currentUnits {
        time
        interval
        temperature2m
        windSpeed10m
        relativeHumidity2m
      }
      current {
        time
        interval
        temperature2m
        windSpeed10m
        relativeHumidity2m
      }
      hourlyUnits {
        time
        temperature2m
        relativeHumidity2m
        windSpeed10m
      }
      hourly {
        time
        temperature2m
        relativeHumidity2m
        windSpeed10m
      }
    }
  }
`;

// Initialize ApolloServer
const testServer = new ApolloServer<ContextValue>({
  typeDefs: typeDefs as TypeSource,
  resolvers: resolvers as IResolvers<any>
});

describe('WeatherData Integation Test', () => {
  it('returns weather data success', async () => {
    weatherAPI.getWeatherData = jest.fn().mockResolvedValue({ ...weatherDummy });

    const response = await testServer.executeOperation(
      {
        query: GET_WEATHER_DATA,
        variables: { latitude: 40, longitude: -74 }
      },
      {
        contextValue: { logger: mockLogger, dataSources: { weatherAPI } }
      }
    );
    expect(response.body).toMatchSnapshot();
  });

  it('throws an error for invalid latitude', async () => {
    weatherAPI.getWeatherData = jest.fn().mockResolvedValue({ ...weatherDummy });

    const response = await testServer.executeOperation(
      {
        query: GET_WEATHER_DATA,
        variables: { latitude: 91, longitude: -74 }
      },
      {
        contextValue: { logger: mockLogger, dataSources: { weatherAPI } }
      }
    );
    expect(response.body).toMatchSnapshot();
  });

  it('throws an error for invalid longitude', async () => {
    weatherAPI.getWeatherData = jest.fn().mockResolvedValue({ ...weatherDummy });

    const response = await testServer.executeOperation(
      {
        query: GET_WEATHER_DATA,
        variables: { latitude: 40, longitude: 181 }
      },
      {
        contextValue: { logger: mockLogger, dataSources: { weatherAPI } }
      }
    );
    expect(response.body).toMatchSnapshot();
  });

  it('handles errors from the weatherAPI.getWeatherData method', async () => {
    weatherAPI.getWeatherData = jest.fn().mockResolvedValue(new Error('Network error'));

    const response = await testServer.executeOperation(
      {
        query: GET_WEATHER_DATA,
        variables: { latitude: 40, longitude: -74 }
      },
      {
        contextValue: { logger: mockLogger, dataSources: { weatherAPI } }
      }
    );
    expect(response.body).toMatchSnapshot();
  });
});
