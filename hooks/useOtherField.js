import { useQuery } from "@tanstack/react-query";
import {
  getOtherField,
  getOtherFieldByModel,
} from "../services/otherFieldService";

export const useOtherField = (queryOptions) => {
  return useQuery({
    queryKey: ["other_field"],
    queryFn: getOtherField,
    ...(queryOptions || {}),
  });
};

export const useOtherFieldModel = (model, queryOptions) => {
  return useQuery({
    queryKey: ["other_field", model],
    queryFn: () => getOtherFieldByModel(model),
    ...(queryOptions || {}),
  });
};

