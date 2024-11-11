"use client"
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function Home() {
  const theme = useTheme()
  return (
    <Box 
      display="flex" 
      width="100%" 
      height="100%" 
      flexDirection="column" 
      textAlign="center"
      justifyContent="center"
      >
      <CssBaseline/>
      <Typography variant="h3">
        This is body 1
      </Typography>
      <Typography variant="body1">
        {JSON.stringify(theme.typography.body1)}
      </Typography>
      <Typography variant="h3">
        This is body 2
      </Typography>
      <Typography variant="body2">
        {JSON.stringify(theme.typography.body2)}
      </Typography>
      <Typography variant="h3">
        And CUSTOM typography body 3
      </Typography>
      <Typography variant="body3">
        {JSON.stringify(theme.typography.body3)}
      </Typography>
    </Box>
  );
}
