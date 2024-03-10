import { render, screen, waitFor } from "@testing-library/react";
import WeatherwidgetWapper from "./WeatherWidget";
import { useGraphQL } from "../hooks/useGraphQL";

jest.mock("../hooks/useGraphQL", () => ({
  useGraphQL: jest.fn(),
}));

jest.mock("@mui/icons-material/Menu", () => () => <span>MenuIcon Mock</span>);

jest.mock("./WeatherCurrent", () => ({
  __esModule: true,
  default: () => <div>Mocked WeatherCurrent</div>,
}));

jest.mock("./WeatherCurrent/WeatherCurrentSkeleton", () => ({
  __esModule: true,
  default: () => <div>Mocked WeatherCurrentSkeleton</div>,
}));

jest.mock("./WeatherHourly", () => ({
  __esModule: true,
  default: () => <div>Mocked WeatherHourly</div>,
}));

jest.mock("./WeatherHourly/WeatherHourlySkeleton", () => ({
  __esModule: true,
  default: () => <div>Mocked WeatherHourlySkeleton</div>,
}));

describe("WeatherwidgetWapper", () => {
  it("renders correctly with showCurrent and showHourly props", async () => {
    (useGraphQL as jest.Mock).mockReturnValue({
      data: {
        getWeatherData: {
          current: {},
          currentUnits: {},
          hourly: {},
          hourlyUnits: {},
          latitude: 0,
          longitude: 0,
        },
      },
      isLoading: false,
      isError: false,
    });
    const { asFragment } = render(
      <WeatherwidgetWapper latitude={0} longitude={0} showHourly={true} />,
    );
    await waitFor(() => {
      expect(screen.getByText("Mocked WeatherCurrent")).toBeInTheDocument();
      expect(screen.getByText("Mocked WeatherHourly")).toBeInTheDocument();
      expect(
        screen.queryByText("Something wrong. Please retry it later!"),
      ).not.toBeInTheDocument();

      expect(screen.queryByText("Mocked WeatherCurrentSkeleton")).toBeNull();
      expect(screen.queryByText("Mocked WeatherHourlySkeleton")).toBeNull();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders loading state correctly", () => {
    (useGraphQL as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      data: null,
    });

    const { asFragment } = render(
      <WeatherwidgetWapper latitude={0} longitude={0} showHourly={true} />,
    );

    expect(
      screen.getByText("Mocked WeatherCurrentSkeleton"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mocked WeatherHourlySkeleton"),
    ).toBeInTheDocument();

    expect(screen.queryByText("Mocked WeatherCurrent")).toBeNull();
    expect(screen.queryByText("Mocked WeatherHourly")).toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error state correctly", () => {
    (useGraphQL as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      data: null,
    });

    const { asFragment } = render(
      <WeatherwidgetWapper latitude={0} longitude={0} showHourly={true} />,
    );

    expect(
      screen.getByText("Something wrong. Please retry it later!"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Mocked WeatherCurrentSkeleton"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mocked WeatherHourlySkeleton"),
    ).toBeInTheDocument();

    expect(screen.queryByText("Mocked WeatherCurrent")).toBeNull();
    expect(screen.queryByText("Mocked WeatherHourly")).toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });
});
