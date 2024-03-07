import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherCurrent from "./WeatherCurrent";
import { useGraphQL } from "../../hooks/useGraphQL";
import { gql } from "../../__generated__/gql";
export interface WeatherWigetProps {
  latitude?: number;
  longitude?: number;
  displayCurrent?: boolean;
  displayHourly?: boolean;
}

const WeatherWiget: FC<WeatherWigetProps> = ({
  latitude,
  longitude,
  displayCurrent = true,
  displayHourly = true,
}) => {
  console.log(latitude, longitude, displayCurrent, displayHourly);

  const WeatherQueryDocument = gql(/* GraphQL */ `
    query GetWeatherData(
      $latitude: Float!
      $longitude: Float!
      $displayCurrent: Boolean!
    ) {
      getWeatherData(latitude: $latitude, longitude: $longitude) {
        latitude
        longitude
        ...WeatherCurrentF @include(if: $displayCurrent)
      }
    }
  `);

  const { data } = useGraphQL(WeatherQueryDocument, {
    latitude: 10,
    longitude: 10,
    displayCurrent,
    displayHourly,
  });

  return (
    <div>
      <h1>Weather Data</h1>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
      <WeatherCurrent
        /* @ts-expect-error: due to fagrament masking */
        current={data?.getWeatherData?.current}
        /* @ts-expect-error: due to fagrament masking */
        currentUnits={data?.getWeatherData?.currentUnits}
      ></WeatherCurrent>
    </div>
  );
};

const WeatherWigetWapper: FC<WeatherWigetProps> = (props) => (
  <QueryClientProvider client={new QueryClient()}>
    <WeatherWiget {...props} />
  </QueryClientProvider>
);

export default WeatherWigetWapper;
