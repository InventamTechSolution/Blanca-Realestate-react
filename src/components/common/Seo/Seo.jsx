import React from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_META_TITLE, DEFAULT_META_DESCRIPTION } from "../../../utils/constant";
import { useSeoSetting } from "../../../hooks/useSeoSetting";

const Seo = ({ title, description, image, url }) => {
  const { data: settings } = useSeoSetting();

  const baseUrl = import.meta.env.VITE_HOME_PAGE_URL;

  const metaTitle =
    title || settings?.setting_meta_title || DEFAULT_META_TITLE;

  const metaDescription =
    description ||
    settings?.setting_meta_description ||
    DEFAULT_META_DESCRIPTION;

  const metaImage =
    image || "/images/logos/favicon.png";

  const canonicalUrl = url
    ? `${baseUrl}${url}`
    : baseUrl;

  return (
    <Helmet prioritizeSeoTags>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Seo;