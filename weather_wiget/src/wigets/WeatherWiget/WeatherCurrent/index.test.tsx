import { render, screen } from "@testing-library/react";
import WeatherCurrent, { WeatherCurrentFragment } from "./index";
import { FragmentType, useFragment } from "../../../__generated__";

jest.mock("../../../__generated__", () => ({
  useFragment: jest.fn(),
  gql: jest.fn(),
}));

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useTheme: () => ({
    palette: {
      common: {
        white: "#ffffff",
      },
    },
  }),
}));

jest.mock("../../../utils/formatTime", () => ({
  fDateTime: jest.fn().mockReturnValue("Mocked Date"),
}));

const mockCurrent = {
  temperature2m: "20",
  windSpeed10m: "5",
  relativeHumidity2m: "60",
  time: "2022-01-01T12:00:00Z",
} as FragmentType<typeof WeatherCurrentFragment>;

const mockCurrentUnits = {
  temperature2m: "°C",
  windSpeed10m: "km/h",
  relativeHumidity2m: "%",
  time: "ISO8601",
} as FragmentType<typeof WeatherCurrentFragment>;

describe("WeatherCurrent", () => {
  it("renders without crashing and displays weather data", () => {
    (useFragment as jest.Mock)
      .mockReturnValueOnce(mockCurrent)
      .mockReturnValueOnce(mockCurrentUnits);
    const { asFragment } = render(
      <WeatherCurrent
        latitude={45}
        longitude={90}
        current={mockCurrent}
        currentUnits={mockCurrentUnits}
      />,
    );

    expect(screen.getAllByText(/20°C/).length).toBe(2);
    expect(screen.getByText(/Mocked Date/)).toBeInTheDocument();
    expect(screen.getByText(/45N, 90E/)).toBeInTheDocument();
    expect(screen.getByText(/5km\/h/)).toBeInTheDocument();
    expect(screen.getByText(/60%/)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
