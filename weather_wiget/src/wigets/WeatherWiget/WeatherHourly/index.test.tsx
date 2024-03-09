import { render, screen } from "@testing-library/react";
import WeatherHourly, { WeatherHourlyFragment } from "./index";
import { FragmentType, useFragment } from "../../../__generated__";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useTheme: () => ({
    palette: {
      common: { white: "#ffffff" },
      primary: { light: "#f6f6f6", main: "#ffffff" },
      info: { light: "#abc", main: "#def" },
      secondary: { light: "#123", main: "#456" },
    },
  }),
}));

jest.mock("../../../__generated__", () => ({
  useFragment: jest.fn(),
  gql: jest.fn(),
}));

jest.mock("./WeatherHourlyChart", () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementation(({ title }) => <div>{title} Chart Mock</div>),
}));

const mockHourlyData = {
  time: ["2022-01-01T00:00:00Z", "2022-01-01T01:00:00Z"],
  temperature2m: [10, 11],
  relativeHumidity2m: [60, 65],
  windSpeed10m: [5, 10],
} as FragmentType<typeof WeatherHourlyFragment>;

const mockHourlyUnits = {
  temperature2m: "°C",
  relativeHumidity2m: "%",
  windSpeed10m: "km/h",
} as FragmentType<typeof WeatherHourlyFragment>;

describe("WeatherHourly", () => {
  it("renders correctly with hourly weather data", () => {
    (useFragment as jest.Mock)
      .mockReturnValueOnce(mockHourlyData)
      .mockReturnValueOnce(mockHourlyUnits);

    const { asFragment } = render(
      <WeatherHourly hourly={mockHourlyData} hourlyUnits={mockHourlyUnits} />,
    );

    expect(screen.getByText("Temperature Chart Mock")).toBeInTheDocument();
    expect(screen.getByText("Humidity Chart Mock")).toBeInTheDocument();
    expect(screen.getByText("Wind Speed Chart Mock")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
