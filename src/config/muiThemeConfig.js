import { createTheme } from "@mui/material/styles";

export const BlogTheme = createTheme({
  palette: {
    primary: {
      main: "#1e1e1e",
      accent: "#2d08bd",
      light: "#3400ff",
    },
  },
  typography: {
    fontFamily: ["lato", "serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 998,
      xl: 1200,
      xxl: 1400,
    },
  }, 
}); 