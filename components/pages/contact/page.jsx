"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import InputField from "@/components/common/InputField/InputField";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import RadioGroup from "@/components/common/RadioGroup/RadioGroup";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import Field from "@/components/common/Field/Field";
import ThankYouModal from "@/components/common/ThankYouModal/ThankYouModal";
import PhoneInput from "@/components/common/PhoneInput/PhoneInput";

import Select from "react-select";
import { Country } from "country-state-city";

import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContactUs } from "@/hooks/useContactUs";
import { useSetting } from "@/hooks/useSetting";
import { contactSchema } from "@/schema/validationSchema";

import "./contact.css";

const contactBg = "/images/background/contect-us.png";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  contactMode: "",
  message: "",
  newsOffers: false,
  privacyPolicy: false,
};

const FALLBACK_CONTACT_EMAIL = "reachus.blanca@gmail.com";
const FALLBACK_CONTACT_NUMBERS = [
  { number: "+91 70219 13284", title: "Head Office Feedback and Complaints" },
  { number: "+91 77700 559535", title: "( Blanca Sales )" },
];
const FALLBACK_CONTACT_ADDRESS =
  "Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood, Navi Mumbai, 400706.";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const { mutate: sendContact, isPending } = useContactUs();
  const { data: settingResponse } = useSetting();

  const settingRecord = useMemo(() => {
    return settingResponse?.data?.[0] || null;
  }, [settingResponse]);

  const reachEmail = settingRecord?.setting_email || FALLBACK_CONTACT_EMAIL;

  const salesPhone = useMemo(() => {
    const raw = settingRecord?.setting_contact_number;
    if (!raw) return FALLBACK_CONTACT_NUMBERS;

    if (Array.isArray(raw)) {
      return raw.map((item) =>
        typeof item === "string" ? { title: "Contact", number: item } : item
      );
    }

    if (typeof raw === "string") {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.map((item) =>
            typeof item === "string"
              ? { title: "Contact", number: item }
              : item
          );
        }
      } catch {}
      return [{ title: "Contact", number: raw }];
    }

    if (typeof raw === "object") return [raw];

    return FALLBACK_CONTACT_NUMBERS;
  }, [settingRecord?.setting_contact_number]);

  const address = settingRecord?.setting_address || FALLBACK_CONTACT_ADDRESS;

  const countryOptions = Country.getAllCountries().map((c) => ({
    label: c.name,
    value: c.isoCode.toLowerCase(),
    isoCode: c.isoCode.toLowerCase(),
    phoneCode: `+${c.phonecode}`,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data) => {
    const selectedCountry = countryOptions.find(
      (c) => c.value === data.country
    );

    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone_number: selectedCountry?.phoneCode
        ? `${selectedCountry.phoneCode}${data.phone}`
        : data.phone,
      country: selectedCountry?.label || data.country,
      message: data.message,
      is_notified: !!data.newsOffers,
      notification_mode: data.contactMode,
    };

    sendContact(payload, {
      onSuccess: () => {
        setShowThankYou(true);
        reset();
      },
      onError: () => {
        alert("Something went wrong");
      },
    });
  };

  const selectedCountryCode = useWatch({
    control,
    name: "country",
    defaultValue: "in",
  });

  return (
    <div className="contact-page">
      <AnimatePresence>
        {isLoading && <Preloader isLoading />}
      </AnimatePresence>

      <Header />

      <main>
        <SmallHeroBanner
          title="Contact Us"
          description="Get in touch with Blanca for your dream property or investment."
          image={contactBg}
        />

        <div className="contact-form-section">
          <Container>
            <Row className="g-4">
              {/* LEFT SIDE */}
              <Col lg={5}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-white">GET IN TOUCH WITH US</h2>

                  <p className="text-white-50">
                    Reach out to us anytime.
                  </p>

                  <div>
                    <p>Email: {reachEmail}</p>

                    {salesPhone.map((p, i) => (
                      <p key={i}>
                        {p.number} ({p.title})
                      </p>
                    ))}

                    <p>{address}</p>
                  </div>
                </motion.div>
              </Col>

              {/* FORM */}
              <Col lg={7}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row className="g-4">
                    <Col md={6}>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <InputField {...field} label="FIRST NAME" />
                        )}
                      />
                      {errors.firstName && <p>{errors.firstName.message}</p>}
                    </Col>

                    <Col md={6}>
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <InputField {...field} label="LAST NAME" />
                        )}
                      />
                    </Col>

                    <Col md={6}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <InputField {...field} label="EMAIL" />
                        )}
                      />
                    </Col>

                    <Col md={6}>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            selectedCountryCode={selectedCountryCode}
                            onCountryChange={(iso) =>
                              setValue("country", iso)
                            }
                          />
                        )}
                      />
                    </Col>

                    <Col md={12}>
                      <button type="submit" disabled={isPending}>
                        {isPending ? "Sending..." : "Submit"}
                      </button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </main>

      <Footer />
      <ScrollToTop />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message="Thank you! We will contact you soon."
      />
    </div>
  );
}