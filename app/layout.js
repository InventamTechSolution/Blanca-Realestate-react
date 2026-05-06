import "./globals.css";
import Providers from "./providers";
import AppShell from "./AppShell";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import GoogleAnalyticsScript from "@/components/scripts";
import {
  inter,
  montserrat,
  playfairDisplay,
  colgentRegular,
  smothing,
  marjorieRegular,
  marjorieItalic,
} from "./fonts";

export const revalidate = 3600;

export const viewport = {
  themeColor: "#000000",
};

export const metadata = {
  icons: {
    icon: "/images/logos/favicon.png",
    shortcut: "/images/logos/favicon.png",
    apple: "/images/logos/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable} ${colgentRegular.variable} ${smothing.variable} ${marjorieRegular.variable} ${marjorieItalic.variable}`}
    >
      <head />
      <body>
        <Providers>
          <AppShell>
            <GoogleAnalyticsScript />
            <Header />
            {children}
            <Footer />
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
