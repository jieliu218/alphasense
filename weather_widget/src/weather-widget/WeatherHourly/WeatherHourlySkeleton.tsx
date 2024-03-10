import { Box, Divider, Skeleton, Stack } from "@mui/material";

const WeatherHourlySkeleton = ({ textColor }: { textColor: string }) => {
  return (
    <Box>
      <Divider sx={{ mt: 2, mb: 2, color: textColor }}>Hourly</Divider>
      <Stack
        direction="column"
        justifyContent="justify-content"
        alignItems="center"
        spacing={1}
      >
        <Skeleton variant="rectangular" width={340} height={153} />
        <Skeleton variant="rectangular" width={340} height={153} />
        <Skeleton variant="rectangular" width={340} height={153} />
      </Stack>
    </Box>
  );
};

export default WeatherHourlySkeleton;
