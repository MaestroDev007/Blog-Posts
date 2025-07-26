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
  
    fontFamily: "var(--font-josefin-regular), sans-serif",


    h1: {
      fontFamily: "var(--font-josefin-bold), sans-serif",
    },
    h2: {
      fontFamily: "var(--font-josefin-bold), sans-serif",
    },
    h3: {
      fontFamily: "var(--font-josefin-bold), sans-serif",
    },
 
    body1: {
      fontFamily: "var(--font-josefin-regular), sans-serif",
    },
    body2: {
      fontFamily: "var(--font-josefin-regular), sans-serif",
    },
   
    button: {
      fontFamily: "var(--font-josefin-bold), sans-serif",
      textTransform: "none",
    },
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