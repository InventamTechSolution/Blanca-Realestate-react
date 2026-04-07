import { useSeoSetting } from "../../../hooks/useSeoSetting";
import { useLocation } from "react-router-dom";
import SEO from "./Seo";



const GlobalSEO = () => {
  const { data } = useSeoSetting();
  const location = useLocation();
  

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