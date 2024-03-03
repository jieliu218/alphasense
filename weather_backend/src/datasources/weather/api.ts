/*
 * The WeatherAPI class is a RESTDataSource that fetches weather data from the OpenMeteo API
 */
import { RESTDataSource } from '@apollo/datasource-rest';
import qs from 'qs';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { type KeyValueCache } from '@apollo/utils.keyvaluecache';
import { GraphQLError } from 'graphql';
import { HourlyDataParameters, CurrentDataParameters, type QueryParameters } from './type';
import { type ContextValue } from '../../utils/context';
import { type WeatherDataModel } from '../../model/weather';

export class WeatherAPI extends RESTDataSource {
  override baseURL = process.env.OPEN_METEO_BASE_URL ?? '';
  private readonly contextValue: ContextValue;

  /*
   * Constructor for the WeatherAPI class
   * @param options - The options to pass to the constructor
   */
  constructor (options: { contextValue: ContextValue, cache: KeyValueCache }) {
    super(options);
    this.contextValue = options.contextValue;
  }

  /*
   * Fetch weather data from the OpenMeteo API
   * @param longitude - The longitude of the location
   * @param latitude - The latitude of the location
   */
  async getWeatherData (longitude: number, latitude: number): Promise<WeatherDataModel> {
    const queryParameters: QueryParameters = {
      latitude,
      longitude,
      current: [
        CurrentDataParameters.Temperature2m,
        CurrentDataParameters.WindSpeed10m,
        CurrentDataParameters.RelativeHumidity2m
      ],
      hourly: [
        HourlyDataParameters.Temperature2m,
        HourlyDataParameters.RelativeHumidity2m,
        HourlyDataParameters.WindSpeed10m
      ]
    };
    const queryString = qs.stringify(queryParameters, { arrayFormat: 'comma' });
    return await this.fetchWithRetry(`forecast?${queryString}`, 3, 1000);
  }

  /*
   * Fetch data from the OpenMeteo API with retries
   * @param path - The path to fetch data from
   * @param retries - The number of retries left
   * @param delay - The delay in milliseconds before the next retry
   */
  async fetchWithRetry (path: string, retries: number, delay: number): Promise<WeatherDataModel> {
    try {
      return await this.get(path);
    } catch (error) {
      if (retries === 0) {
        this.contextValue.logger.error('WeatherAPI Retry Error', { error });
        throw new GraphQLError('An error occurred after fetching weather data retried 3 times', {
          extensions: {
            code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR
          }
        });
      }
      this.contextValue.logger.info(
        `WeatherAPI: Retrying after ${delay}ms. Retries left: ${retries - 1}`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
      return await this.fetchWithRetry(path, retries - 1, delay);
    }
  }
}
