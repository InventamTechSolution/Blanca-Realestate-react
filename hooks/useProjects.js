import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProjects,
  getProjectById,
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

export const useProjectById = (id, queryOptions) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id),
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