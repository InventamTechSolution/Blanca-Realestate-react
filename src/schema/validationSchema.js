import * as yup from "yup";

export const enquirySchema = yup.object().shape({
    project_id: yup.string().nullable(),
    name: yup.string().required("Full name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    phone_number: yup
      .string()
      .required("Phone number is required")
      .min(10, "Phone number must be at least 10 digits"),
    message: yup.string().nullable(),
  });