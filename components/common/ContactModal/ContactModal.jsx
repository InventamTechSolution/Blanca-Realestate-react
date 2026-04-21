"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Form } from "react-bootstrap";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import PhoneInput from "../PhoneInput/PhoneInput";
import Checkbox from "../Checkbox/Checkbox";
import Field from "../Field/Field";
import { useContactModal } from "../../../context/ContactModalContext";
import Select from "react-select";
import { useContactUs } from "../../../hooks/useContactUs";
import { contactModalSchema } from "../../../schema/validationSchema";
import "./ContactModal.css";
import "@/components/common/contact-country-select.css";
import { contactCountrySelectStyles } from "@/components/common/contactCountrySelectConfig";
import { useCountrySelectMenuPortal } from "@/components/common/useCountrySelectMenuPortal";
import ThemeButton from "../../common/Button/ThemeBtn";
import { getNormalizedCountries } from "@/utils/countryCache";

const ContactModal = () => {
  const countryMenuPortal = useCountrySelectMenuPortal();
  const { isOpen, closeContactModal, modalData, openThankYouModal } =
    useContactModal();
  const { mutate: sendContact, isPending } = useContactUs();

  const downloadWithFilename = async (url, filename) => {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error("download_failed");
      const blob = await res.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = filename || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(objectUrl);
      return true;
    } catch {
      return false;
    }
  };

  const getThankYouContent = ({ type, hasDownload }) => {
    const normalizedType = String(type || "").toLowerCase();

    if (normalizedType.includes("brochure")) {
      return hasDownload
        ? {
            title: "Brochure Download",
            message:
              "Thank you for contacting us. Your brochure download will begin shortly, and our representative will reach out to you soon.",
          }
        : {
            title: "Brochure Request Received",
            message:
              "Thank you for contacting us. Our representative will reach out to you shortly and share the project brochure with you.",
          };
    }

    if (normalizedType.includes("fact")) {
      return hasDownload
        ? {
            title: "Fact Sheet Download",
            message:
              "Thank you for contacting us. Your fact sheet download will begin shortly, and our representative will reach out to you soon.",
          }
        : {
            title: "Fact Sheet Request Received",
            message:
              "Thank you for contacting us. Our representative will reach out to you shortly and share the fact sheet with you.",
          };
    }

    if (normalizedType.includes("sold")) {
      return {
        title: "Thank You",
        message:
          "Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to help you explore other available projects.",
      };
    }

    return {
      title: "Thank You",
      message:
        "Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements.",
    };
  };

  const countryOptions = React.useMemo(
    () =>
      getNormalizedCountries().map((c) => ({
        label: c.name,
        value: c.isoCode,
        isoCode: c.isoCode,
        phoneCode: c.phoneCode,
      })),
    [],
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(contactModalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "ae",
      message: "",
      privacyPolicy: false,
    },
  });

  useEffect(() => {
    if (!isOpen) return;

    const nextDefaults = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "ae",
      message: modalData?.prefillMessage || "",
      privacyPolicy: false,
    };

    reset(nextDefaults);
  }, [isOpen, modalData, reset]);

  const selectedCountryCode = useWatch({
    control,
    name: "country",
    defaultValue: "ae",
  });

  const onSubmit = (data) => {
    const selectedCountry = countryOptions.find(
      (c) => c.value === data.country,
    );
    const phoneWithCountryCode = selectedCountry?.phoneCode
      ? `${selectedCountry.phoneCode}${data.phone}`
      : data.phone;

    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      country: selectedCountry?.label || data.country || null,
      email: data.email,
      phone_number: phoneWithCountryCode,
      message: data.message,
      is_notified: false,
      notification_mode: "",
    };

    sendContact(payload, {
      onSuccess: async () => {
        const downloadUrl = modalData?.downloadUrl;
        const downloadFilename = modalData?.downloadFilename;
        const cleanedUrl =
          typeof downloadUrl === "string" ? downloadUrl.trim() : "";

        if (!cleanedUrl) {
          openThankYouModal(
            getThankYouContent({
              type: modalData?.type,
              hasDownload: false,
            }),
          );
        }
        closeContactModal();
        reset();

        if (cleanedUrl) {
          const ok = await downloadWithFilename(cleanedUrl, downloadFilename);
          if (!ok) window.open(cleanedUrl, "_blank", "noopener,noreferrer");
        }
      },
      onError: () => {
        alert("Something went wrong. Please try again.");
      },
    });
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
              <h2>{modalData?.title || "Contact Us"}</h2>
            </div>
            <button className="close-btn" onClick={closeContactModal}>
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          {modalData?.description ? (
            <p className="contact-modal-description">{modalData.description}</p>
          ) : null}

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-modal-form"
          >
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
                  <p className="text-danger small mt-1 mb-1">
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
                  <p className="text-danger small mt-1 mb-1">
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
                  <p className="text-danger small mt-1 mb-1">
                    {errors.email.message}
                  </p>
                )}
              </Col>
              <Col md={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      label="PHONE NUMBER"
                      selectedCountryCode={selectedCountryCode}
                      onCountryChange={(isoCode) =>
                        setValue("country", isoCode)
                      }
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-danger small mt-1 mb-1">
                    {errors.phone.message}
                  </p>
                )}
              </Col>
              <Col md={12}>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Field label="COUNTRY">
                      <div className="glass-input-wrapper overflow-visible">
                        <Select
                          {...field}
                          instanceId="contact-modal-country-select"
                          className="contact-country-select"
                          classNamePrefix="contact-country-select"
                          styles={contactCountrySelectStyles}
                          menuPortalTarget={countryMenuPortal}
                          menuPosition="fixed"
                          menuShouldScrollIntoView={false}
                          options={countryOptions}
                          value={
                            countryOptions.find(
                              (option) => option.value === field.value,
                            ) || null
                          }
                          onChange={(option) =>
                            field.onChange(option ? option.value : "")
                          }
                          placeholder="-- SELECT ONE --"
                        />
                      </div>
                    </Field>
                  )}
                />
                {errors.country && (
                  <p className="text-danger small mt-1 mb-1">
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
                  <p className="text-danger small mt-1 mb-1">
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
                          <Link
                            href="/privacy-policy"
                            className="privacy-link"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeContactModal();
                            }}
                          >
                            Privacy Policy
                          </Link>
                        </>
                      }
                      checked={field.value}
                    />
                  )}
                />
                {errors.privacyPolicy && (
                  <p className="text-danger small mt-1 mb-1">
                    {errors.privacyPolicy.message}
                  </p>
                )}
              </Col>
            </Row>

            <div className="modal-submit-container">
              <ThemeButton type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Submit"}
              </ThemeButton>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;
