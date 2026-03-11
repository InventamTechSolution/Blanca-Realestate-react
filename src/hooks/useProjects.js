import { useQuery } from "@tanstack/react-query";
import { getProjects, getProjectById } from "../services/projectService";

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