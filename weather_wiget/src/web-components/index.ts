import r2wc from "@r2wc/react-to-web-component";
import { WeatherWiget } from "../wigets";

customElements.define(
  "weather-wiget",
  r2wc(WeatherWiget, {
    props: {
      latitude: "number",
      longitude: "number",
      showCurrent: "boolean",
      showHourly: "boolean",
      theme: "json",
    },
  }),
);
