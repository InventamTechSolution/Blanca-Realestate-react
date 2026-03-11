import { axiosInstance } from "../api/axiosInstance";

export const getProjects = async (params) => {
  const { data } = await axiosInstance.get("/project", { params });
  return data;
};


export const getProjectById = async (id) => {
  const { data } = await axiosInstance.get(`/project/${id}`);
  return data;
};

export const getProjectsWithFilter = async ({
  category,
  status,
  page = 1,
  limit = 50,
}) => {
  const body = {
    search: "",
    filter: {
      category_slug:
        category && category !== "all" ? [category] : [],
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
    body
  );

  return data;
};
