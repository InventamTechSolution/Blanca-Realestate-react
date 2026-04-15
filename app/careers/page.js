import Careers from "@/screens/Careers";
import { getCareerCategories } from "@/services/careerService";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;

  const { title, description, LOGO_URL } = await getGlobalSeo();

  return {
    metadataBase: new URL(BASE_URL),

    title: `Careers | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/careers`,
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/careers`,
      title: `Careers | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Careers Page",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Careers | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

const CAREERS_PAGE_SIZE = 4;

export default async function Page() {
  const [categoryData, careersFirstPage] = await Promise.all([
    getCareerCategories({
      page: 1,
      limit: 10,
      is_parent: true,
    }),
    getCareerCategories({
      page: 1,
      limit: CAREERS_PAGE_SIZE,
      is_parent: false,
    }),
  ]);

  return (
    <Careers
      categoryData={categoryData}
      initialCareersData={careersFirstPage}
    />
  );
}
