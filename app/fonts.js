import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const colgentRegular = localFont({
  src: "../assets/fonts/Colgent Regular.ttf",
  variable: "--font-colgent",
  display: "swap",
});

export const smothing = localFont({
  src: "../assets/fonts/Smothing.ttf",
  variable: "--font-smothing",
  display: "swap",
});

export const marjorieRegular = localFont({
  src: "../assets/fonts/Marjorie-Regular.ttf",
  variable: "--font-marjorie-regular",
  display: "swap",
});

export const marjorieItalic = localFont({
  src: "../assets/fonts/Marjorie-Italic.ttf",
  variable: "--font-marjorie-italic",
  display: "swap",
});
