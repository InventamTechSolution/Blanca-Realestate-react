import { useQuery } from "@tanstack/react-query";
import { getComplianceProjects } from "../services/complianceService";

export const useComplianceProjects = (queryOptions) => {
  return useQuery({
    queryKey: ["compliance-projects"],
    queryFn: getComplianceProjects,
    ...(queryOptions || {}),
  });
};
