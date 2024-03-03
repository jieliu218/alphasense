export interface WeatherDataModel {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: CurrentUnitsModel
  current: CurrentWeatherModel
  hourly_units: HourlyUnitsModel
  hourly: HourlyWeatherModel
}

export interface CurrentUnitsModel {
  time: string
  interval: string
  temperature_2m: string
  wind_speed_10m: string
  relative_humidity_2m: string
}

export interface CurrentWeatherModel {
  time: string
  interval: number
  temperature_2m: number
  wind_speed_10m: number
  relative_humidity_2m: number
}

export interface HourlyUnitsModel {
  time: string
  temperature_2m: string
  relative_humidity_2m: string
  wind_speed_10m: string
}

export interface HourlyWeatherModel {
  time: string[]
  temperature_2m: number[]
  relative_humidity_2m: number[]
  wind_speed_10m: number[]
}
