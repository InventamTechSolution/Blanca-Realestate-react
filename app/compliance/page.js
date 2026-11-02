import Compliance from "@/screens/Compliance";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";
import { getComplianceProjects } from "@/services/complianceService";

export const revalidate = 600;

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;
  const { title, LOGO_URL } = await getGlobalSeo();
  const description =
    "Environmental clearances, compliance reports and statutory documents for Blanca Real Estate projects.";

  return {
    metadataBase: new URL(BASE_URL),

    title: `Compliance | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/compliance`,
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/compliance`,
      title: `Compliance | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Compliance Page",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Compliance | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

export default async function Page() {
  // The page still renders (and the client retries) if the API is unreachable at build time.
  const initialData = await getComplianceProjects().catch(() => undefined);

  return <Compliance initialData={initialData} />;
}
