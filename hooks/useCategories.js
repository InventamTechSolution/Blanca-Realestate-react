import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryService";

export const useCategories = (params, queryOptions) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => getCategories(params),
    ...(queryOptions || {}),
  });
};


