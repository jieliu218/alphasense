import React, { Suspense, FC, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import { Alert, CardContent, CardHeader, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGraphQL } from "../hooks/useGraphQL";
import { gql } from "../__generated__/gql";
import { textBlur } from "../theme/css";
import { Menu } from "../components/Menu";

const WeatherCurrentLazy = React.lazy(() => import("./WeatherCurrent"));
const WeatherCurrentSkeletonLazy = React.lazy(
  () => import("./WeatherCurrent/WeatherCurrentSkeleton"),
);
const WeatherHourlyChartLazy = React.lazy(() => import("./WeatherHourly"));
const WeatherHourlySkeletonLazy = React.lazy(
  () => import("./WeatherHourly/WeatherHourlySkeleton"),
);

export interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
  showHourly?: boolean;
  theme?: Record<string, any>;
}

const Weatherwidget: FC<WeatherWidgetProps> = ({
  latitude,
  longitude,
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
      $showHourly: Boolean!
    ) {
      getWeatherData(latitude: $latitude, longitude: $longitude) {
        latitude
        longitude
        ...WeatherCurrentF
        ...WeatherHourlyF @include(if: $showHourly)
      }
    }
  `);

  const { data, isLoading, isError } = useGraphQL(WeatherQueryDocument, {
    latitude: latitudeValue,
    longitude: longitudeValue,
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
        minWidth: 388,
        maxWidth: 388,
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
        title="Weather widget"
      />
      {isError && (
        <Alert severity="error">Something wrong. Please retry it later!</Alert>
      )}
      <Menu
        isMenuOpen={isMenuOpen}
        toggleMenu={handleToggleMenu}
        defaultLatitude={latitudeValue}
        defaultLongitude={longitudeValue}
        showHourly={showHourly}
        saveLatutudeLongitude={(latitude, longitude) => {
          setLatitudeValue(latitude);
          setLongitudeValue(longitude);
          setIsMenuOpen(false);
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
          ":last-child": { pb: 0 },
        }}
      >
        {!isLoading && !isError ? (
          <Suspense fallback={<WeatherCurrentSkeletonLazy />}>
            <WeatherCurrentLazy
              // @ts-expect-error: due to fagrament masking
              current={data?.getWeatherData?.current}
              // @ts-expect-error: due to fagrament masking
              currentUnits={data?.getWeatherData?.currentUnits}
              // @ts-expect-error: due to fagrament masking
              latitude={data?.getWeatherData?.latitude}
              // @ts-expect-error: due to fagrament masking
              longitude={data?.getWeatherData?.longitude}
            />
          </Suspense>
        ) : (
          <WeatherCurrentSkeletonLazy />
        )}
        {showHourly &&
          (!isLoading && !isError ? (
            <Suspense
              fallback={<WeatherHourlySkeletonLazy textColor={textColor} />}
            >
              <WeatherHourlyChartLazy
                // @ts-expect-error: due to fagrament masking
                hourly={data?.getWeatherData?.hourly}
                // @ts-expect-error: due to fagrament masking
                hourlyUnits={data?.getWeatherData?.hourlyUnits}
              />
            </Suspense>
          ) : (
            <WeatherHourlySkeletonLazy textColor={textColor} />
          ))}
      </CardContent>
    </Card>
  );
};

const WeatherWidgetWapper: FC<WeatherWidgetProps> = (props) => {
  const theme = createTheme(props.theme);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Weatherwidget {...props} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default WeatherWidgetWapper;
