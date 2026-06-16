import { getSetting } from "@/services/settingService";
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_TITLE,
  BASE_API_URL,
  WEBSITE_MAIN_LOGO,
} from "@/utils/constant";

export async function getGlobalSeo() {
  let title = DEFAULT_META_TITLE;
  let description = DEFAULT_META_DESCRIPTION;

  const LOGO_URL = WEBSITE_MAIN_LOGO.startsWith("http")
    ? WEBSITE_MAIN_LOGO
    : `${BASE_API_URL}/uploads/images/blanca-logo.png`;

  let version = Date.now();

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 1500); // 1.5s timeout

  try {
    const res = await fetch(
      `${BASE_API_URL}setting?offset=0&limit=1`,
      {
        next: { revalidate: 3600 }, // Cache SEO settings for 1 hour
        signal: controller.signal,
      }
    );

    clearTimeout(id);

    if (res.ok) {
      const settingResponse = await res.json();
      const settingRecord =
        settingResponse?.data?.[0] || settingResponse?.data || null;

      title = settingRecord?.setting_meta_title || title;
      description = settingRecord?.setting_meta_description || description;
      version = settingRecord?.setting_updated_at || version;
    }
  } catch (error) {
    clearTimeout(id);
    console.error("Error fetching global SEO settings:", error);
  }

  return {
    title,
    description,
    LOGO_URL,
    version,
  };
}