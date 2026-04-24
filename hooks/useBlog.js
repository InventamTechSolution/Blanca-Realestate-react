import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlogBySlug } from "../services/blogService";

export const useBlogs = (params, queryOptions) => {
  return useQuery({
    queryKey: ["blogs", params],
    queryFn: () => getBlogs(params),
    ...(queryOptions || {}),
  });
};

export const useBlogBySlug = (slug, queryOptions) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug),
    ...(queryOptions || {}),
    enabled: !!slug,
  });
};
