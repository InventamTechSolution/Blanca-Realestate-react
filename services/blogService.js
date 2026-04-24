import { axiosInstance } from "./axiosInstance";

export const getBlogs = async (params) => {
  const { data } = await axiosInstance.post("/blog/get_blogs_with_filter", params);
  return data;
};

export const getBlogBySlug = async (slug) => {
  const { data } = await axiosInstance.get(`/blog/slug/${slug}`);
  return data;
};
