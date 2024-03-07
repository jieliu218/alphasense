import { WeatherWiget } from "./wigets/WeatherWiget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <WeatherWiget latitude={40} longitude={-74} />
      </QueryClientProvider>
    </>
  );
}

export default App;
