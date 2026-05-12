import Registration from "@/screens/Registration";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;
  const { title, description, LOGO_URL } = await getGlobalSeo();

  return {
    metadataBase: new URL(BASE_URL),
    title: `Registration | ${title}`,
    description,
    alternates: {
      canonical: `${BASE_URL}/registration`,
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/registration`,
      title: `Registration | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Registration Page",
        },
      ],
    },
  };
}

export default function Page() {
  return <Registration />;
}
