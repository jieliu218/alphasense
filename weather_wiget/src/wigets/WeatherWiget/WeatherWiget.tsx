import { FC, useState } from "react";
import Card from "@mui/material/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherCurrent from "./WeatherCurrent";
import WeatherHourly from "./WeatherHourly";
import { useGraphQL } from "../../hooks/useGraphQL";
import { gql } from "../../__generated__/gql";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export interface WeatherWigetProps {
  latitude: number;
  longitude: number;
  showCurrent?: boolean;
  showHourly?: boolean;
}

const WeatherWiget: FC<WeatherWigetProps> = ({
  latitude,
  longitude,
  showCurrent = true,
  showHourly = true,
}) => {
  console.log(latitude, longitude, showCurrent, showHourly);
  const [latitudeValue, setLatitudeValue] = useState<number>(latitude);
  const [longitudeValue, setLongitudeValue] = useState<number>(longitude);

  const WeatherQueryDocument = gql(/* GraphQL */ `
    query GetWeatherData(
      $latitude: Float!
      $longitude: Float!
      $showCurrent: Boolean!
      $showHourly: Boolean!
    ) {
      getWeatherData(latitude: $latitude, longitude: $longitude) {
        latitude
        longitude
        ...WeatherCurrentF @include(if: $showCurrent)
        ...WeatherHourlyF @include(if: $showHourly)
      }
    }
  `);

  const { data } = useGraphQL(WeatherQueryDocument, {
    latitude: latitudeValue,
    longitude: longitudeValue,
    showCurrent,
    showHourly,
  });

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
        p: 4,
      }}
    >
      {showCurrent && (
        <WeatherCurrent
          /* @ts-expect-error: due to fagrament masking */
          current={data?.getWeatherData?.current}
          /* @ts-expect-error: due to fagrament masking */
          currentUnits={data?.getWeatherData?.currentUnits}
          /* @ts-expect-error: due to fagrament masking */
          latitude={data?.getWeatherData?.latitude}
          /* @ts-expect-error: due to fagrament masking */
          longitude={data?.getWeatherData?.longitude}
        ></WeatherCurrent>
      )}
      {showHourly && (
        <WeatherHourly
          /* @ts-expect-error: due to fagrament masking */
          hourly={data?.getWeatherData?.hourly}
          /* @ts-expect-error: due to fagrament masking */
          hourlyUnits={data?.getWeatherData?.hourlyUnits}
        ></WeatherHourly>
      )}
    </Card>
  );
};

const WeatherWigetWapper: FC<WeatherWigetProps> = (props) => {
  const theme = createTheme();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WeatherWiget {...props} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default WeatherWigetWapper;
