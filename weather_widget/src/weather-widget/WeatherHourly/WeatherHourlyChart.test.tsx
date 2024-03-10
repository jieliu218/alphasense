import { render, screen } from "@testing-library/react";
import WeatherHourlyChart from "./WeatherHourlyChart";

jest.mock("@mui/material/styles", () => ({
  ...jest.requireActual("@mui/material/styles"),
  useTheme: () => ({
    palette: {
      primary: {
        light: "#fff",
        main: "#000",
      },
      common: {
        white: "#fff",
      },
    },
  }),
}));

jest.mock("../../components/Chart", () => ({
  __esModule: true,
  default: () => <div>MockedChart</div>,
  useChart: jest.fn().mockImplementation((options) => options),
}));

jest.mock("../../utils/formatTime", () => ({
  fDateTime: jest.fn().mockReturnValue("Formatted Date"),
}));

describe("WeatherHourlyChart", () => {
  it("renders correctly with given props", () => {
    const mockProps = {
      title: "Test Chart",
      icon: <span>Icon</span>,
      time: ["2022-01-01T00:00:00Z", "2022-01-01T01:00:00Z"],
      unit: "°C",
      chart: {
        series: [1, 2],
      },
    };

    const { asFragment } = render(<WeatherHourlyChart {...mockProps} />);

    expect(screen.getByText("Test Chart")).toBeInTheDocument();

    expect(screen.getByText("Icon")).toBeInTheDocument();

    expect(screen.getByText("MockedChart")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
