import BlogDetails from "@/screens/Blog/BlogDetails";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const BASE_URL = HOME_PAGE_URL;
  const { title, description, LOGO_URL } = await getGlobalSeo();
  const slug = params?.slug ? String(params.slug) : "";

  return {
    metadataBase: new URL(BASE_URL),

    title: `${slug ? `${slug} | ` : ""}Blog | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${slug}`,
      title: `${slug ? `${slug} | ` : ""}Blog | ${title}`,
      description,
      images: [
        {
          url: LOGO_URL,
          width: 1200,
          height: 630,
          alt: "Blog Details",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${slug ? `${slug} | ` : ""}Blog | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

export default function Page({ params }) {
  return <BlogDetails slug={params?.slug} />;
}

