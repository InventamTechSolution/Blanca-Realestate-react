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
    firstName: yup.string().required("First name is required").matches(REGEX.name, "First name should contain only letters"),
    lastName: yup.string().required("Last name is required").matches(REGEX.name, "Last name should contain only letters"),
    email: yup.string().required("Email is required").matches(REGEX.email, "Please enter a valid email"),
    phone: yup.string().required("Phone number is required").matches(REGEX.phone, "Please enter a valid phone number"),
    country: yup.string().required("Country is required"),
    contactMode: yup.string().required("Preferred mode of contact is required"),
    message: yup.string().matches(REGEX.startingSpaceNotAllowed, "Please enter a valid message").max(400, "Message must be at most 400 characters long").optional(),
    newsOffers: yup.boolean(),
    privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy")
});

export const contactModalSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").matches(REGEX.name, "First name should contain only letters"),
  lastName: yup.string().required("Last name is required").matches(REGEX.name, "Last name should contain only letters"),
  email: yup.string().required("Email is required").matches(REGEX.email, "Please enter a valid email"),
  phone: yup.string().required("Phone number is required").matches(REGEX.phone, "Please enter a valid phone number"),
  country: yup.string().required("Country is required"),
  message: yup.string().required("Message is required").matches(REGEX.startingSpaceNotAllowed, "Please enter a valid message").max(400, "Message must be at most 400 characters long"),
  privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy")
});