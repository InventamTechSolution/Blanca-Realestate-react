import { useQuery } from "@tanstack/react-query";
import { getCareerCategories, getCareers } from "../services/careerService";

export const useCareerCategories = (params) => {
  return useQuery({
    queryKey: ["career-categories", params],
    queryFn: () => getCareerCategories(params),
  });
};

export const useCareers = (params) => {
  return useQuery({
    queryKey: ["careers", params],
    queryFn: () => getCareers(params),
  });
};

