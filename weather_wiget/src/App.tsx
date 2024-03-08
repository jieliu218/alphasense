import { WeatherWiget } from "./wigets/WeatherWiget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "@mui/material";

import "./App.css";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Container>
          <WeatherWiget latitude={40} longitude={-74} />
        </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;
