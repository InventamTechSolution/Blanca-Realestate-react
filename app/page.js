import Home from "@/screens/Home";
import { getProjects } from "@/services/projectService";
import { getSetting } from "@/services/settingService";
import { getOtherField } from "@/services/otherFieldService";
import { getTestimonials } from "@/services/testimonialService";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;

  const { title, description, LOGO_URL, version } = await getGlobalSeo();

  return {
    metadataBase: new URL(BASE_URL),

    title,
    description,

    alternates: {
      canonical: `${BASE_URL}?v=${version}`,
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}?v=${version}`,
      title,
      description,
      images: [
        {
          url: `${LOGO_URL}?v=${version}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${LOGO_URL}?v=${version}`],
    },
  };
}


export default async function Page() {
  const results = await Promise.allSettled([
    getProjects({
      page: 1,
      limit: 5,
      sort_column: "project_home_sequence",
      sort_order: "asc",
      show_on_home_page: true,
    }),
    getSetting(),
    getOtherField(),
    getProjects({ page: 1, limit: 50, is_active: true }),
    getTestimonials({ page: 1, limit: 1000, isActive: true }),
  ]);

  const getValue = (idx, fallback) => {
    const res = results[idx];
    return res?.status === "fulfilled" ? res.value : fallback;
  };

  const projectsResponse = getValue(0, { data: [] });
  const settingResponse = getValue(1, null);
  const otherFieldResponse = getValue(2, null);
  const projectsListResponse = getValue(3, { data: [] });
  const testimonialsResponse = getValue(4, { data: [] });

  return (
    <Home
      projectsResponse={projectsResponse}
      settingResponse={settingResponse}
      otherFieldResponse={otherFieldResponse}
      projectsListResponse={projectsListResponse}
      testimonialsResponse={testimonialsResponse}
    />
  );
}
