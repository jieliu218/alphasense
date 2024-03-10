"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "@liujie2017/weather-widget";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["weather-widget"]: any;
    }
  }
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const WeatherWidgetSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const themePurple = {
    palette: {
      primary: {
        main: "#917ca9",
      },
      secondary: {
        main: "#03DAC6",
      },
      warning: {
        main: "#6200EE",
        light: "#EDE7F6",
      },
    },
  };

  const themeGreen = {
    palette: {
      primary: {
        main: "#74a2a2",
      },
      secondary: {
        main: "#6200EE",
      },
      warning: {
        main: "#03DAC6",
        light: "#EDE7F6",
      },
    },
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Weather Widget Example"
        >
          <Tab label="Default" />
          <Tab label="Theme" />
          <Tab label="Hide Hourly" />
          <Tab label="Html (IFRAME)" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <weather-widget latitude={40} longitude={-74} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <weather-widget
          latitude={-40}
          longitude={74}
          theme={JSON.stringify(themePurple)}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <weather-widget
          latitude={0}
          longitude={0}
          theme={JSON.stringify(themeGreen)}
          hourly={0}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <iframe
          width={600}
          height={800}
          srcDoc={`<!doctype html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React + TS</title>
              </head>
              <body>
                <div id="root"></div>
                <script type="module" src="/src/main.tsx"></script>
                <weather-widget
                  latitude="90"
                  longitude="78"
                  hourly="1"
                  theme='{
                    "palette":{
                      "primary":{
                          "main":"#b9c4bc"
                      },
                      "secondary":{
                          "main":"#74a2a2"
                      },
                      "warning":{
                          "main":"#917ca9",
                          "light":"#bcaacf"
                      }
                    }
                }'
                ></weather-widget>
                <script type="module" src="https://cdn.jsdelivr.net/npm/@liujie2017/weather-widget@0.0.3/dist/index.es.min.js"></script>
              </body>
            </html>
            `}
        />
      </CustomTabPanel>
    </div>
  );
};

export default WeatherWidgetSection;
