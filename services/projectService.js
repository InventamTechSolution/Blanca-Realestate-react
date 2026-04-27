import { axiosInstance } from "./axiosInstance";

export const getProjects = async (params) => {
  const { data } = await axiosInstance.get("/project", { params });
  return data;
};

export const getProjectBySlug = async (slug) => {
  try {
    const { data } = await axiosInstance.get(`/project/slug/${slug}`);
    console.log("🚀 ~ getProjectBySlug ~ data:", data);
    return data;
  } catch (error) {
    console.log("🚀 ~ getProjectBySlug ~ error:", error);
    return null;
  }
};

export const getProjectsWithFilter = async ({
  category,
  status,
  location,
  page = 1,
  limit = 50,
}) => {
  const body = {
    search: "",
    filter: {
      category_slug: category && category !== "all" ? [category] : [],
      location: location && location !== "all" ? location : undefined,
      is_active: true,
      status: status && status !== "all" ? status : undefined,
    },
    offset: page,
    limit: limit,
    sort_column: "project_created_at",
    sort_order: "asc",
  };

  const { data } = await axiosInstance.post(
    "/project/get_projects_with_filter",
    body,
  );

  return data;
};

export const getProjectLocations = async () => {
  const { data } = await axiosInstance.get("/project/location/listing");
  return data;
};

export const sendEnquiry = async (payload) => {
  const { data } = await axiosInstance.post("/enquire", payload);
  return data;
};
