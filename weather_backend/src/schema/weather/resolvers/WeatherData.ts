import type { WeatherDataResolvers } from './../../types.generated';
export const WeatherData: WeatherDataResolvers = {
  currentUnits: (parent) => parent.current_units,
  hourlyUnits: (parent) => parent.hourly_units,
  generationtimeMs: (parent) => parent.generationtime_ms,
  utcOffsetSeconds: (parent) => parent.utc_offset_seconds,
  timezoneAbbreviation: (parent) => parent.timezone_abbreviation
};
