import type { HourlyWeatherResolvers } from './../../types.generated';
export const HourlyWeather: HourlyWeatherResolvers = {
  temperature2m: (parent) => parent.temperature_2m,
  relativeHumidity2m: (parent) => parent.relative_humidity_2m,
  windSpeed10m: (parent) => parent.wind_speed_10m
};
