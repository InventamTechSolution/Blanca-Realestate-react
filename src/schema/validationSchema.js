import * as yup from "yup";
import { REGEX } from "../utils/regex";

export const enquirySchema = yup.object().shape({
    project_id: yup.string().nullable(),
    name: yup.string().required("Full name is required").matches(REGEX.fullName, "Full name should contain only letters and spaces"),
    email: yup
      .string()
      .required("Email is required")
      .matches(REGEX.email, "Please enter a valid email"),
    phone_number: yup
      .string()
      .required("Phone number is required")
      .matches(REGEX.phone, "Please enter a valid phone number"),
    message: yup.string()
    .matches(REGEX.startingSpaceNotAllowed, "Please enter a valid message")
    .max(300, "Message must be at most 300 characters long")
    .optional(),
  });

  export const contactSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    country: yup.string().required("Country is required"),
    contactMode: yup.string().required("Preferred mode of contact is required"),
    message: yup.string().required("Message is required"),
    newsOffers: yup.boolean(),
    privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy")
});