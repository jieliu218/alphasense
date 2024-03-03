export enum CurrentDataParameters {
  Temperature2m = 'temperature_2m',
  WindSpeed10m = 'wind_speed_10m',
  RelativeHumidity2m = 'relative_humidity_2m',
}

export enum HourlyDataParameters {
  Temperature2m = 'temperature_2m',
  RelativeHumidity2m = 'relative_humidity_2m',
  WindSpeed10m = 'wind_speed_10m',
}

export interface QueryParameters {
  latitude: number
  longitude: number
  current: CurrentDataParameters[]
  hourly: HourlyDataParameters[]
}
