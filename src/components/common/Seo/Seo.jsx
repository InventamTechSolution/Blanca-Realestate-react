import { Helmet } from "react-helmet-async";
import { DEFAULT_META_DESCRIPTION, DEFAULT_META_TITLE } from "../../../utils/constant";

const SEO = ({ title, description, image, url }) => {

  const Meta_Title = title || DEFAULT_META_TITLE;
  const Meta_Description = description || DEFAULT_META_DESCRIPTION;
  const Meta_Image = image || '/images/logos/favicon.png';
  const Meta_Url = url ? `${baseUrl}${url}` : baseUrl;

  return ( 
    <Helmet>
      {/* Basic SEO */}
      <title>{Meta_Title}</title>
      <meta name="description" content={Meta_Description} />

      {/* Open Graph (for sharing preview) */}
      <meta property="og:title" content={Meta_Title} />
      <meta property="og:description" content={Meta_Description} />
      <meta property="og:image" content={Meta_Image} />
      <meta property="og:url" content={Meta_Url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={Meta_Title} />
      <meta name="twitter:description" content={Meta_Description} />
      <meta name="twitter:image" content={Meta_Image} />
    </Helmet>
  );
};

export default SEO;