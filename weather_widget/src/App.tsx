import { WeatherWidget } from "./weather-widget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, Stack } from "@mui/material";
import { green, purple } from "@mui/material/colors";
// import "@liujie2017/weather-widget";

import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["weather-widget"]: any;
    }
  }
}

function App() {
  const themePurple = {
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      warning: {
        main: purple[500],
        light: purple[100],
      },
    },
  };
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Container>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <WeatherWidget latitude={40} longitude={-74} />
            <WeatherWidget
              latitude={-40}
              longitude={74}
              theme={themePurple}
              hourly={1}
            />
            <weather-widget
              latitude={-40}
              longitude={74}
              theme={JSON.stringify(themePurple)}
              hourly={0}
            ></weather-widget>
          </Stack>
        </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;
