import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    'src/schema': defineConfig({
      typesPluginsConfig: {
        makeResolverTypeCallable: true,
        mappers: {
          WeatherData: '../model/weather#WeatherDataModel',
          CurrentUnits: '../model/weather#CurrentUnitsModel',
          CurrentWeather: '../model/weather#CurrentWeatherModel',
          HourlyUnits: '../model/weather#HourlyUnitsModel',
          HourlyWeather: '../model/weather#HourlyWeatherModel',
        },
      },
    }),
  },
}
export default config
