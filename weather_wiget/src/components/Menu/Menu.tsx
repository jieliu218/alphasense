import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Slide,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { bgBlur } from "../../theme/css";

import CloseIcon from "@mui/icons-material/Close";

interface MenuProps {
  isMenuOpen: boolean;
  defaultLatitude?: number;
  defaultLongitude?: number;
  toggleMenu: (
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  saveLatutudeLongitude: (latitude: number, longitude: number) => void;
}

const Menu: FC<MenuProps> = ({
  isMenuOpen,
  defaultLatitude,
  defaultLongitude,
  toggleMenu,
  saveLatutudeLongitude,
}) => {
  const [latitude, setLatitude] = useState<number>(defaultLatitude || 0);
  const [longitude, setLongitude] = useState<number>(defaultLongitude || 0);

  const onChangeLatitudeCommitted = (
    _event: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    setLatitude(value as number);
  };

  const onChangeLongitudeCommitted = (
    _event: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    setLongitude(value as number);
  };

  const handleLatutudeLongitudeSave = () => {
    saveLatutudeLongitude(latitude, longitude);
  };

  return (
    <Slide in={isMenuOpen}>
      <Card
        sx={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bgcolor: bgBlur({ color: "#ffffff", opacity: 0.6 }),
          zIndex: 1200,
        }}
        elevation={4}
      >
        <CardHeader
          sx={{ color: "primary.main" }}
          action={
            <IconButton
              aria-label="menu"
              color="primary"
              onClick={toggleMenu(false)}
              sx={{
                ":focus": { outline: "none !important" },
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          }
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack display="flex" direction="column" width="100%">
            <Typography
              gutterBottom
              variant="h6"
              component="span"
              color="primary.main"
            >
              Latitude
            </Typography>
            <Slider
              data-testid="latitude-slider"
              aria-label="Latitude"
              defaultValue={defaultLatitude}
              valueLabelDisplay="auto"
              step={0.1}
              min={-90}
              max={90}
              marks={[
                { value: -90, label: "-90" },
                { value: -45, label: "-45" },
                { value: 0, label: "0" },
                { value: 45, label: "45" },
                { value: 90, label: "90" },
              ]}
              onChangeCommitted={onChangeLatitudeCommitted}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
          </Stack>
          <Stack display="flex" direction="column" width="100%">
            <Typography
              gutterBottom
              variant="h6"
              component="span"
              color="primary.main"
            >
              Longitude
            </Typography>
            <Slider
              data-testid="longitude-slider"
              aria-label="Logitude"
              defaultValue={defaultLongitude}
              valueLabelDisplay="auto"
              step={0.1}
              min={-180}
              max={180}
              marks={[
                { value: -180, label: "-180" },
                { value: -135, label: "-135" },
                { value: -90, label: "-90" },
                { value: -45, label: "-45" },
                { value: 0, label: "0" },
                { value: 45, label: "45" },
                { value: 90, label: "90" },
                { value: 135, label: "135" },
                { value: 180, label: "180" },
              ]}
              onChangeCommitted={onChangeLongitudeCommitted}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
          </Stack>
          <Button
            variant="outlined"
            sx={{
              ":focus": { outline: "none !important" },
            }}
            onClick={handleLatutudeLongitudeSave}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </Slide>
  );
};

export default Menu;
