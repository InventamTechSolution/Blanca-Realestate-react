import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../services/settingService";

export const useSetting = (params) => {
  return useQuery({
    queryKey: ["setting", params],
    queryFn: () => getSetting(params),
  });
};

export const useSeoSetting = () => {
  return useQuery({
    queryKey: ["seo-setting"],
    queryFn: () => getSetting({ offset: 0, limit: 1 }),

    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,

    select: (data) => data?.data?.[0] || data?.data,
  });
};

