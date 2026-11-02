import { axiosInstance } from "./axiosInstance";

export const getComplianceProjects = async () => {
  const { data } = await axiosInstance.get("/compliance");
  return data;
};
