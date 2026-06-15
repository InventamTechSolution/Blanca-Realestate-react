import Careers from "@/screens/Careers";
import { getCareerCategories } from "@/services/careerService";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";

import { unstable_cache } from "next/cache";

const getCachedCareerCategories = (offset, limit, isParent) =>
  unstable_cache(
    async () =>
      getCareerCategories({
        offset,
        limit,
        is_parent: isParent,
      }),
    [`career-categories-${offset}-${limit}-${isParent}`],
    { revalidate: 600, tags: ["careers"] }
  )();

const CAREERS_PAGE_SIZE = 4;

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
  };
}

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page) || 1;

  const results = await Promise.allSettled([
    getCachedCareerCategories(0, 10, true),
    getCachedCareerCategories(page, CAREERS_PAGE_SIZE, false),
  ]);

  const getValue = (idx, fallback) => {
    const res = results[idx];
    return res?.status === "fulfilled" ? res.value : fallback;
  };

  const categoryData = getValue(0, { data: [] });
  const careersData = getValue(1, { data: [] });

  return (
    <Careers
      categoryData={categoryData}
      initialCareersData={careersData}
      initialPage={page}
    />
  );
}
