import { useQuery } from "@tanstack/react-query";
import { getProjects, getProjectById, getProjectsWithFilter } from "../services/projectService";

export const useProjects = (params) => {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getProjects(params),
  });
};

export const useProjectById = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id),
  });
};

export const useProjectsWithFilter = (params) => {
  return useQuery({
    queryKey: ["projects-filter", params],
    queryFn: () => getProjectsWithFilter(params),
  });
};