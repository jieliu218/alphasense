import type { CurrentWeatherResolvers } from './../../types.generated';
export const CurrentWeather: CurrentWeatherResolvers = {
  relativeHumidity2m: (parent) => parent.relative_humidity_2m,
  temperature2m: (parent) => parent.temperature_2m,
  windSpeed10m: (parent) => parent.wind_speed_10m
};
