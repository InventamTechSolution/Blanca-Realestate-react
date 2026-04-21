import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../services/settingService";

export const useSetting = (params, queryOptions) => {
  return useQuery({
    queryKey: ["setting", params],
    queryFn: () => getSetting(params),
    ...(queryOptions || {}),
  });
};
