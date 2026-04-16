import "./globals.css";
import Providers from "./providers";
import AppShell from "./AppShell";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import GoogleAnalyticsScript from "@/components/scripts";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+SH6ePHmJuPs4VpS1oRQwuPvhH7SyAaVSXvE+Wf3AA4hIqJCEflq1oiM/O17AvJA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
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
