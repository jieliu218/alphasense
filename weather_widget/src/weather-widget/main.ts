import WeatherWidgetWapper from "./WeatherWidget";
import r2wc from "@r2wc/react-to-web-component";

customElements.define(
  "weather-widget",
  r2wc(WeatherWidgetWapper, {
    props: {
      latitude: "number",
      longitude: "number",
      showHourly: "boolean",
      theme: "json",
    },
  }),
);

export * from "./WeatherWidget";
export { default as Weatherwidget } from "./WeatherWidget";
