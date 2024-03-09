import { FC, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import { Alert, CardHeader, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherCurrent, { WeatherCurrentSkeleton } from "./WeatherCurrent";
import WeatherHourly, { WeatherHourlySkeleton } from "./WeatherHourly";
import { useGraphQL } from "../../hooks/useGraphQL";
import { gql } from "../../__generated__/gql";
import { textBlur } from "../../theme/css";
import { Menu } from "../../components/Menu";

export interface WeatherWigetProps {
  latitude: number;
  longitude: number;
  showCurrent?: boolean;
  showHourly?: boolean;
  theme?: Record<string, any>;
}

const WeatherWiget: FC<WeatherWigetProps> = ({
  latitude,
  longitude,
  showCurrent = true,
  showHourly = true,
}) => {
  const theme = useTheme();
  const [latitudeValue, setLatitudeValue] = useState<number>(latitude);
  const [longitudeValue, setLongitudeValue] = useState<number>(longitude);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

  const { data, isLoading, isError } = useGraphQL(WeatherQueryDocument, {
    latitude: latitudeValue,
    longitude: longitudeValue,
    showCurrent,
    showHourly,
  });

  const handleToggleMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsMenuOpen(open);
    };

  const textColor = textBlur(theme.palette.common.white, 0.7);

  return (
    <Card
      id="drawer-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
        p: 3,
        position: "relative",
      }}
    >
      <CardHeader
        sx={{ color: textColor }}
        action={
          <IconButton
            aria-label="menu"
            color="primary"
            onClick={handleToggleMenu(true)}
            sx={{
              ":focus": { outline: "none !important" },
            }}
          >
            <MenuIcon fontSize="large" sx={{ color: textColor }} />
          </IconButton>
        }
        title="Weather Wiget"
      />
      {isError && (
        <Alert severity="error">Something wrong. Please retry it later!</Alert>
      )}
      <Menu
        isMenuOpen={isMenuOpen}
        toggleMenu={handleToggleMenu}
        defaultLatitude={latitudeValue}
        defaultLongitude={longitudeValue}
        saveLatutudeLongitude={(latitude, longitude) => {
          setLatitudeValue(latitude);
          setLongitudeValue(longitude);
          setIsMenuOpen(false);
        }}
      />
      {showCurrent && !isLoading && !isError ? (
        <WeatherCurrent
          // @ts-expect-error: due to fagrament masking
          current={data?.getWeatherData?.current}
          // @ts-expect-error: due to fagrament masking
          currentUnits={data?.getWeatherData?.currentUnits}
          // @ts-expect-error: due to fagrament masking
          latitude={data?.getWeatherData?.latitude}
          // @ts-expect-error: due to fagrament masking
          longitude={data?.getWeatherData?.longitude}
        ></WeatherCurrent>
      ) : (
        <WeatherCurrentSkeleton />
      )}
      {showHourly && !isLoading && !isError ? (
        <WeatherHourly
          // @ts-expect-error: due to fagrament masking
          hourly={data?.getWeatherData?.hourly}
          // @ts-expect-error: due to fagrament masking
          hourlyUnits={data?.getWeatherData?.hourlyUnits}
        ></WeatherHourly>
      ) : (
        <WeatherHourlySkeleton textColor={textColor} />
      )}
    </Card>
  );
};

const WeatherWigetWapper: FC<WeatherWigetProps> = (props) => {
  const theme = createTheme(props.theme);
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
