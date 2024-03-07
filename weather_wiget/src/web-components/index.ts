import r2wc from "@r2wc/react-to-web-component";
import { WeatherWiget } from "../wigets/WeatherWiget";

customElements.define(
  "weather-wiget",
  r2wc(WeatherWiget, {
    props: {
      latitude: "number",
      longitude: "number",
      displayCurrent: "boolean",
      displayHourly: "boolean",
    },
  }),
);
