/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { CurrentUnits } from './weather/resolvers/CurrentUnits';
import { CurrentWeather } from './weather/resolvers/CurrentWeather';
import { HourlyUnits } from './weather/resolvers/HourlyUnits';
import { HourlyWeather } from './weather/resolvers/HourlyWeather';
import { getWeatherData as Query_getWeatherData } from './weather/resolvers/Query/getWeatherData';
import { WeatherData } from './weather/resolvers/WeatherData';
export const resolvers: Resolvers = {
  Query: { getWeatherData: Query_getWeatherData },

  CurrentUnits,
  CurrentWeather,
  HourlyUnits,
  HourlyWeather,
  WeatherData
};
