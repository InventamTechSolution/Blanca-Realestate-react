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
import { DEFAULT_META_TITLE, DEFAULT_META_DESCRIPTION } from "@/utils/constant";
import { CONTACT } from "@/config/contact";

export const revalidate = 3600;

export const viewport = {
  themeColor: "#000000",
};

export const metadata = {
  title: DEFAULT_META_TITLE,
  description: DEFAULT_META_DESCRIPTION,
  icons: {
    icon: "/images/logos/favicon.png",
    shortcut: "/images/logos/favicon.png",
    apple: "/images/logos/favicon.png",
  },
  openGraph: {
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    url: "https://www.blanca.co.in",
    siteName: "Blanca Real Estate",
    images: [
      {
        url: "https://be.blanca.co.in/uploads/images/blanca-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    images: ["https://be.blanca.co.in/uploads/images/blanca-logo.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Blanca Real Estate",
      "url": "https://www.blanca.co.in",
      "logo": "https://www.blanca.co.in/images/logos/blanca-logo.png",
      "telephone": CONTACT.phone_office,
      "email": CONTACT.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT.address,
        "addressLocality": "Navi Mumbai",
        "postalCode": "400706",
        "addressCountry": "IN",
      },
      "foundingDate": "1981",
      "sameAs": ["https://www.instagram.com/blancarealestate"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Blanca Real Estate",
      "url": "https://www.blanca.co.in",
      "logo": "https://www.blanca.co.in/images/logos/blanca-logo.png",
      "sameAs": ["https://www.instagram.com/blancarealestate"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Blanca Real Estate",
      "url": "https://www.blanca.co.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.blanca.co.in/projects?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable} ${colgentRegular.variable} ${smothing.variable} ${marjorieRegular.variable} ${marjorieItalic.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
