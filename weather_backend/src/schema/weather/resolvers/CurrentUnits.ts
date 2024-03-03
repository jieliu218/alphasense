import type { CurrentUnitsResolvers } from './../../types.generated';
export const CurrentUnits: CurrentUnitsResolvers = {
  temperature2m: (parent) => parent.temperature_2m,
  relativeHumidity2m: (parent) => parent.relative_humidity_2m,
  windSpeed10m: (parent) => parent.wind_speed_10m
};
