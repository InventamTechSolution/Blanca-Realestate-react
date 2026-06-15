import Projects from "@/screens/Projects";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";
import {
  getProjectsWithFilter,
  getProjectLocations,
} from "@/services/projectService";
import { getCategories } from "@/services/categoryService";

import { unstable_cache } from "next/cache";

const getCachedProjects = (filter, status, area) =>
  unstable_cache(
    async () =>
      getProjectsWithFilter({
        page: 1,
        limit: 10,
        category: filter,
        status: status,
        location: area,
      }),
    [`projects-list-${filter}-${status}-${area}`],
    { revalidate: 600, tags: ["projects"] }
  )();

const getCachedLocations = unstable_cache(
  async () => getProjectLocations(),
  ["project-locations-cache"],
  { revalidate: 600, tags: ["locations"] }
);

const getCachedCategories = unstable_cache(
  async () => getCategories({ limit: 10, page: 1 }),
  ["project-categories-cache"],
  { revalidate: 600, tags: ["categories"] }
);

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;

  const { title, description, LOGO_URL } = await getGlobalSeo();

  return {
    metadataBase: new URL(BASE_URL),

    title: `Projects | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/projects`,
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/projects`,
      title: `Projects | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Projects Page",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Projects | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

export default async function Page({ searchParams }) {
  const { filter = "all", status = "all", area = "all" } = await searchParams;

  const results = await Promise.allSettled([
    getCachedProjects(filter, status, area),
    getCachedLocations(),
    getCachedCategories(),
  ]);

  const getValue = (idx, fallback) => {
    const res = results[idx];
    return res?.status === "fulfilled" ? res.value : fallback;
  };

  const initialProjects = getValue(0, { data: [] });
  const initialLocations = getValue(1, []);
  const initialCategories = getValue(2, { data: [] });

  return (
    <Projects
      initialProjects={initialProjects}
      initialLocations={initialLocations}
      initialCategories={initialCategories}
    />
  );
}
