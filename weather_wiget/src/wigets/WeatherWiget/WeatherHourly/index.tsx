import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import { gql, FragmentType, useFragment } from "../../../__generated__";
import { HourlyUnits, HourlyWeather } from "../../../__generated__/graphql";
import { textColor } from "../../../theme/css";
import WeatherHourlyChart from "./WeatherHourlyChart";

export const WeatherHourlyFragment = gql(/* GraphQL */ `
  fragment WeatherHourlyF on WeatherData {
    hourly {
      time
      temperature2m
      relativeHumidity2m
      windSpeed10m
    }
    hourlyUnits {
      time
      temperature2m
      relativeHumidity2m
      windSpeed10m
    }
  }
`);

const WeatherHourly = (props: {
  hourly: FragmentType<typeof WeatherHourlyFragment>;
  hourlyUnits: FragmentType<typeof WeatherHourlyFragment>;
}) => {
  const theme = useTheme();

  const hourly = useFragment(
    WeatherHourlyFragment,
    props.hourly,
  ) as HourlyWeather;
  const hourlyUnits = useFragment(
    WeatherHourlyFragment,
    props.hourlyUnits,
  ) as HourlyUnits;

  return (
    <Box>
      <Divider sx={{ mt: 2, mb: 2, color: textColor }}>Hourly</Divider>
      <Stack
        direction="column"
        justifyContent="justify-content"
        alignItems="center"
        spacing={2}
      >
        <WeatherHourlyChart
          title="Temperature"
          icon={<ThermostatIcon sx={{ fontSize: 20, color: textColor }} />}
          time={hourly?.time as string[]}
          unit={hourlyUnits?.temperature2m || "°C"}
          chart={{
            series: hourly?.temperature2m as number[],
          }}
        />
        <WeatherHourlyChart
          title="Humidity"
          icon={<OpacityIcon sx={{ fontSize: 20, color: textColor }} />}
          time={hourly?.time as string[]}
          unit={hourlyUnits?.relativeHumidity2m || "%"}
          chart={{
            colors: [theme.palette.info.light, theme.palette.info.main],
            series: hourly?.relativeHumidity2m as number[],
          }}
        />
        <WeatherHourlyChart
          title="Wind Speed"
          icon={<AirIcon sx={{ fontSize: 20, color: textColor }} />}
          time={hourly?.time as string[]}
          unit={hourlyUnits?.windSpeed10m || "m/s"}
          chart={{
            colors: [theme.palette.warning.light, theme.palette.warning.main],
            series: hourly?.windSpeed10m as number[],
          }}
        />
      </Stack>
    </Box>
  );
};

export default WeatherHourly;
