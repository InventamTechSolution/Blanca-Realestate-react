import BlogDetails from "@/screens/Blog/BlogDetails";
import { HOME_PAGE_URL } from "@/utils/constant";
import { getGlobalSeo } from "@/utils/getGlobalSeo";
import { getBlogBySlug, getBlogs } from "@/services/blogService";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const BASE_URL = HOME_PAGE_URL;
  const { title, description, LOGO_URL } = await getGlobalSeo();

  // Optionally fetch blog data to improve metadata
  let blogTitle = slug;
  try {
    const blogResponse = await getBlogBySlug(slug);
    if (blogResponse?.data?.blog_title) {
      blogTitle = blogResponse.data.blog_title;
    }
  } catch (error) {
    console.error("Error fetching blog for metadata:", error);
  }

  return {
    metadataBase: new URL(BASE_URL),

    title: `${blogTitle} | Blog | ${title}`,
    description,

    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${slug}`,
      title: `${blogTitle} | Blog | ${title}`,
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
      title: `${blogTitle} | Blog | ${title}`,
      description,
      images: [LOGO_URL],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const [blogData, relatedBlogs] = await Promise.all([
    getBlogBySlug(slug),
    getBlogs({ limit: 6 }),
  ]);

  return (
    <BlogDetails
      slug={slug}
      initialBlogData={blogData}
      initialRelatedData={relatedBlogs}
    />
  );
}


