import Projects from "@/screens/Projects";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";
import {
  getProjectsWithFilter,
  getProjectLocations,
} from "@/services/projectService";
import { getCategories } from "@/services/categoryService";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  const [initialProjects, initialLocations, initialCategories] =
    await Promise.all([
      getProjectsWithFilter({
        page: 1,
        limit: 10,
        category: filter,
        status: status,
        location: area,
      }),
      getProjectLocations(),
      getCategories({ limit: 10, page: 1 }),
    ]);

  return (
    <Projects
      initialProjects={initialProjects}
      initialLocations={initialLocations}
      initialCategories={initialCategories}
    />
  );
}
