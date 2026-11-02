import { axiosInstance } from "./axiosInstance";

export const getOtherField = async () => {
  const { data } = await axiosInstance.get("/other-field");
  return data;
};

// A single content group, e.g. "Footer".
export const getOtherFieldByModel = async (model) => {
  const { data } = await axiosInstance.get(
    `/other-field/${encodeURIComponent(model)}`,
  );
  return data;
};

