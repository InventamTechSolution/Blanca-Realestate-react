import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Icon } from "@iconify/react";
import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import PhoneInput from "../PhoneInput/PhoneInput";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import ThankYouModal from "../ThankYouModal/ThankYouModal";
import { useContactModal } from "../../../context/ContactModalContext";
import "./ContactModal.css";
import ThemeButton from "../../common/Button/ThemeBtn";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  country: yup.string().required("Country is required"),
  message: yup.string().required("Message is required"),
  privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});

const ContactModal = () => {
  const { isOpen, closeContactModal } = useContactModal();
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "United Arab Emirates",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setShowThankYou(true);
    closeContactModal();
    reset();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeContactModal}
        size="lg"
        showHeader={false}
      >
        <div className="contact-modal-inner">
          <div className="modal-header-custom">
            <div className="title-with-blue-bar">
              <span className="blue-bar"></span>
              <h2>Contact Us</h2>
            </div>
            <button className="close-btn" onClick={closeContactModal}>
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)} className="contact-modal-form">
            <Row className="g-3">
              <Col md={6}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="FIRST NAME"
                      placeholder="FIRST NAME"
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-danger small mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </Col>
              <Col md={6}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="LAST NAME"
                      placeholder="LAST NAME"
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-danger small mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </Col>
              <Col md={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="email"
                      label="EMAIL"
                      placeholder="YOUR EMAIL"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-danger small mt-1">
                    {errors.email.message}
                  </p>
                )}
              </Col>
              <Col md={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput {...field} label="PHONE NUMBER" />
                  )}
                />
                {errors.phone && (
                  <p className="text-danger small mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </Col>
              <Col md={12}>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      {...field}
                      label="COUNTRY"
                      options={[
                        "United Arab Emirates",
                        "India",
                        "USA",
                        "UK",
                        "Canada",
                      ]}
                    />
                  )}
                />
                {errors.country && (
                  <p className="text-danger small mt-1">
                    {errors.country.message}
                  </p>
                )}
              </Col>
              <Col md={12}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      as="textarea"
                      rows={4}
                      label="MESSAGE"
                      placeholder="YOUR MESSAGE"
                    />
                  )}
                />
                {errors.message && (
                  <p className="text-danger small mt-1">
                    {errors.message.message}
                  </p>
                )}
              </Col>
              <Col md={12}>
                <Controller
                  name="privacyPolicy"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      label={
                        <>
                          I've read and agree to the{" "}
                          <a href="/privacy-policy" className="privacy-link">
                            Privacy Policy
                          </a>
                        </>
                      }
                      checked={field.value}
                    />
                  )}
                />
                {errors.privacyPolicy && (
                  <p className="text-danger small mt-1">
                    {errors.privacyPolicy.message}
                  </p>
                )}
              </Col>
            </Row>

            <div className="modal-submit-container">
              <ThemeButton type="submit">
                Submit
              </ThemeButton>
            </div>
          </Form>
        </div>
      </Modal>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message="Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements."
      />
    </>
  );
};

export default ContactModal;
