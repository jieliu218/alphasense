import styles from "./page.module.css";
import dynamic from "next/dynamic";
// import WeatherWidgetSection from "./sections/weather-widget";

const WeatherWidgetSection = dynamic(
  () => import("./sections/weather-widget"),
  { ssr: false },
);

export default function Home() {
  return (
    <main className={styles.main}>
      <WeatherWidgetSection />
    </main>
  );
}
