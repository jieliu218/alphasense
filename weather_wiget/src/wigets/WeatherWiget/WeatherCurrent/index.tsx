import { gql, FragmentType, useFragment } from "../../../__generated__";
import { CurrentUnits, CurrentWeather } from "../../../__generated__/graphql";

export const WeatherCurrentFragment = gql(/* GraphQL */ `
  fragment WeatherCurrentF on WeatherData {
    current {
      time
      interval
      temperature2m
      windSpeed10m
      relativeHumidity2m
    }
    currentUnits {
      time
      interval
      temperature2m
      windSpeed10m
      relativeHumidity2m
    }
  }
`);

const WeatherCurrent = (props: {
  current: FragmentType<typeof WeatherCurrentFragment>;
  currentUnits: FragmentType<typeof WeatherCurrentFragment>;
}) => {
  const current = useFragment(
    WeatherCurrentFragment,
    props.current,
  ) as CurrentWeather;
  const currentUnits = useFragment(
    WeatherCurrentFragment,
    props.currentUnits,
  ) as CurrentUnits;
  return (
    <div>
      {current && (
        <>
          <h3>
            Humidity: {current?.relativeHumidity2m}{" "}
            {currentUnits?.relativeHumidity2m}
          </h3>
          <h3>
            Temperature: {current.temperature2m}° {currentUnits?.temperature2m}
          </h3>
          <h3>
            Wind Speed: {current.windSpeed10m} {currentUnits?.windSpeed10m}
          </h3>
        </>
      )}
    </div>
  );
};

export default WeatherCurrent;
