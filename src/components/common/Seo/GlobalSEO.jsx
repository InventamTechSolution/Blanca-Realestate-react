import { useSeoSetting } from "../../../hooks/useSeoSetting";
import { useLocation } from "react-router-dom";
import SEO from "./Seo";



const GlobalSEO = () => {
  const { data } = useSeoSetting();
  const location = useLocation();

  // Project details page uses its own dynamic SEO per-project.
  if (/^\/project\/[^/]+/.test(location.pathname)) return null;
  

  return (
    <SEO
      title={data?.setting_meta_title}
      description={data?.setting_meta_description}
      image='/images/logos/favicon.png'
      url={location.pathname}
    />
  );
};

export default GlobalSEO;