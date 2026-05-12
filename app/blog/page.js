import Blog from "@/screens/Blog";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";
import { getBlogs } from "@/services/blogService";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  const BASE_URL = HOME_PAGE_URL;
  const { title, description, LOGO_URL } = await getGlobalSeo();

  return {
    metadataBase: new URL(BASE_URL),

    title: `Blog | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/blog`,
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/blog`,
      title: `Blog | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Blog Page",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Blog | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

export default async function Page() {
  const initialData = await getBlogs({
    offset: 1,
    limit: 6,
  });

  return <Blog initialData={initialData} />;
}


