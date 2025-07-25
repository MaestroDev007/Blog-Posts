import localFont from "next/font/local";

export const myFont = localFont({
  src: "../assets/fonts/Lato-Regular.ttf",
  display: "swap",
  variable: "--font-lato",
});

export const myFontBold = localFont({
  src: "../assets/fonts/Lato-Bold.ttf",
  display: "swap",
  variable: "--font-lato-bold",
});
