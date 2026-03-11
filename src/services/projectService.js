import { axiosInstance } from "../api/axiosInstance";

export const getProjects = async (params) => {
  const { data } = await axiosInstance.get("/project", { params });
  return data;
};


export const getProjectById = async (id) => {
  const { data } = await axiosInstance.get(`/project/${id}`);
  return data;
};
