import {
  Box,
  Divider,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TodayIcon from "@mui/icons-material/Today";
import dayjs from "dayjs";
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
  latitude: number;
  longitude: number;
  current: FragmentType<typeof WeatherCurrentFragment>;
  currentUnits: FragmentType<typeof WeatherCurrentFragment>;
}) => {
  const theme = useTheme();

  const current = useFragment(
    WeatherCurrentFragment,
    props.current,
  ) as CurrentWeather;

  const currentUnits = useFragment(
    WeatherCurrentFragment,
    props.currentUnits,
  ) as CurrentUnits;

  const textColor = alpha(theme.palette.common.white, 0.7);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: alpha(theme.palette.common.white, 0.2),
        p: 2,
        borderRadius: 2,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          gutterBottom
          variant="h3"
          component="span"
          color={textColor}
          sx={{ gap: 2 }}
        >
          {`${current?.temperature2m}${currentUnits?.temperature2m}`}
        </Typography>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={0.25}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0.25}
          >
            <TodayIcon sx={{ fontSize: 20, color: textColor }} />
            <Typography
              gutterBottom
              variant="body1"
              component="span"
              color={textColor}
            >
              {dayjs(current?.time).format("HH:mm A")}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0.25}
          >
            <FmdGoodIcon sx={{ fontSize: 20, color: textColor }} />
            <Typography
              gutterBottom
              variant="body1"
              component="span"
              color={textColor}
            >
              {`${props.latitude?.toFixed()}N, ${props.longitude?.toFixed()}E`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0.25}
        >
          <ThermostatIcon sx={{ fontSize: 20, color: textColor }} />
          <Typography
            gutterBottom
            variant="body1"
            component="span"
            color={textColor}
          >
            {`${current?.temperature2m}${currentUnits?.temperature2m}`}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0.25}
        >
          <AirIcon sx={{ fontSize: 20, color: textColor }} />
          <Typography
            gutterBottom
            variant="body1"
            component="span"
            color={textColor}
          >
            {`${current?.windSpeed10m}${currentUnits?.windSpeed10m}`}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0.25}
        >
          <OpacityIcon sx={{ fontSize: 20, color: textColor }} />
          <Typography
            gutterBottom
            variant="body1"
            component="span"
            color={textColor}
          >
            {`${current?.relativeHumidity2m}${currentUnits?.relativeHumidity2m}`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WeatherCurrent;
