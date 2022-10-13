import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#6534FF",
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    fontSize: 14,
    fontWeightBold: 600,
    fontWeightMedium: 500
  },
});