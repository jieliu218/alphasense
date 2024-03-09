import React, { FC } from "react";
import { ApexOptions } from "apexcharts";
import {
  Box,
  useTheme,
  BoxProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Chart, { useChart } from "../../../components/Chart";
import { bgBlur, textBlur } from "../../../theme/css";
import { fDateTime } from "../../../utils/formatTime";
import { fNumber } from "../../../utils/formatNumber";
import { Maybe } from "../../../__generated__/graphql";

interface WeatherHourlyChartProps extends BoxProps {
  title: string;
  icon: React.ReactNode;
  time: string[] | undefined;
  unit: Maybe<string> | undefined;
  chart: {
    colors?: string[];
    series: number[];
    options?: ApexOptions;
  };
}

const WeatherHourlyChart: FC<WeatherHourlyChartProps> = ({
  title,
  icon,
  time,
  unit,
  chart,
  sx,
  ...other
}) => {
  const theme = useTheme();

  const {
    colors = [theme.palette.primary.light, theme.palette.primary.main],
    series,
    options,
  } = chart;

  const chartOptions = useChart({
    colors: [colors[1]],
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          // @ts-expect-error: ApexCharts type error
          { offsets: 0, color: colors[0] },
          { offsets: 100, color: colors[1] },
        ],
      },
    },
    chart: {
      animations: {
        enabled: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      categories: (time || []).map((t) => fDateTime(t, "dd MMM p")),
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: (value: number) => fNumber(value) + unit,
        title: {
          formatter: () => "",
        },
      },
      marker: {
        show: false,
      },
    },
    ...options,
  });

  const textColor = textBlur(theme.palette.common.white, 0.7);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: bgBlur({ color: theme.palette.common.white, opacity: 0.2 }),
        p: 2,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0.25}
      >
        {icon}
        <Typography
          gutterBottom
          variant="body1"
          component="span"
          color={textColor}
        >
          {title}
        </Typography>
      </Stack>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Chart
        type="line"
        series={[{ data: series as number[] }]}
        options={chartOptions}
        width={"100%"}
        height={64}
      />
    </Box>
  );
};

export default WeatherHourlyChart;
