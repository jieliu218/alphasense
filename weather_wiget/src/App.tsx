import { WeatherWiget } from "./wigets/WeatherWiget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, Stack } from "@mui/material";
import { green, purple } from "@mui/material/colors";

import "./App.css";

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
            <WeatherWiget latitude={40} longitude={-74} />
            <WeatherWiget latitude={-40} longitude={74} theme={themePurple} />
          </Stack>
        </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;
