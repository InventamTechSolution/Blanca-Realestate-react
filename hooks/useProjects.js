import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProjects,
  getProjectBySlug,
  getProjectsWithFilter,
  getProjectLocations,
  sendEnquiry,
} from "../services/projectService";

export const useProjects = (params, queryOptions) => {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getProjects(params),
    ...(queryOptions || {}),
  });
};

export const useProjectBySlug = (slug, queryOptions) => {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => getProjectBySlug(slug),
    ...(queryOptions || {}),
  });
};

export const useProjectsWithFilter = (params, queryOptions) => {
  return useQuery({
    queryKey: ["projects-filter", params],
    queryFn: () => getProjectsWithFilter(params),
    ...(queryOptions || {}),
  });
};

export const useProjectLocations = (queryOptions) => {
  return useQuery({
    queryKey: ["project-locations"],
    queryFn: getProjectLocations,
    ...(queryOptions || {}),
  });
};

export const useEnquire = () => {
  return useMutation({
    mutationFn: sendEnquiry,
  });
};
