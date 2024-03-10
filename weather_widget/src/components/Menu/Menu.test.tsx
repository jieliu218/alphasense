import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu Component", () => {
  const mockToggleMenu = jest.fn();
  const mockSaveLatutudeLongitude = jest.fn();

  it("renders correctly with the menu open", () => {
    render(
      <Menu
        isMenuOpen={true}
        defaultLatitude={10}
        defaultLongitude={20}
        toggleMenu={mockToggleMenu}
        saveLatutudeLongitude={mockSaveLatutudeLongitude}
      />,
    );

    expect(screen.getByText("Latitude")).toBeInTheDocument();
    expect(screen.getByText("Longitude")).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Latitude" })).toHaveValue("10");
    expect(screen.getByRole("slider", { name: "Logitude" })).toHaveValue("20");
  });

  it("closes the menu when the close icon is clicked", () => {
    render(
      <Menu
        isMenuOpen={true}
        defaultLatitude={10}
        defaultLongitude={20}
        toggleMenu={mockToggleMenu}
        saveLatutudeLongitude={mockSaveLatutudeLongitude}
      />,
    );

    fireEvent.click(screen.getByLabelText("menu"));

    expect(mockToggleMenu).toHaveBeenCalledWith(false);
  });

  it("saves the latitude and longitude when the save button is clicked", async () => {
    render(
      <Menu
        isMenuOpen={true}
        defaultLatitude={10}
        defaultLongitude={20}
        toggleMenu={mockToggleMenu}
        saveLatutudeLongitude={mockSaveLatutudeLongitude}
      />,
    );

    const latitudeSlider = screen.getByTestId("latitude-slider");
    const longitudeSlider = screen.getByTestId("longitude-slider");

    await fireEvent.mouseDown(latitudeSlider, { clientX: 10, clientY: 20 });
    await fireEvent.mouseDown(longitudeSlider, { clientX: 10, clientY: 20 });

    fireEvent.click(screen.getByText("Save"));

    expect(mockSaveLatutudeLongitude).toHaveBeenCalledWith(
      expect.any(Number),
      expect.any(Number),
    );
  });

  it("does not render when isMenuOpen is false", () => {
    render(
      <Menu
        isMenuOpen={false}
        defaultLatitude={10}
        defaultLongitude={20}
        toggleMenu={mockToggleMenu}
        saveLatutudeLongitude={mockSaveLatutudeLongitude}
      />,
    );

    expect(screen.queryByText("Latitude")).not.toBeVisible();
    expect(screen.queryByText("Longitude")).not.toBeVisible();
  });
});
