import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { motion, AnimatePresence } from "framer-motion";
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import InputField from "../../components/common/InputField/InputField";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import RadioGroup from "../../components/common/RadioGroup/RadioGroup";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import Field from "../../components/common/Field/Field";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThankYouModal from "../../components/common/ThankYouModal/ThankYouModal";
import Select from "react-select";
import PhoneInput from "../../components/common/PhoneInput/PhoneInput";
import { Country } from "country-state-city";
import { useContactUs } from "../../hooks/useContactUs";


const schema = yup.object().shape({
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
const contactBg = "/images/background/contect-us.png";
import './contect.css';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showThankYou, setShowThankYou] = useState(false);
    const { mutate: sendContact, isPending } = useContactUs();

    const countryOptions = useMemo(
        () =>
            Country.getAllCountries().map((c) => ({
                label: c.name,
                value: c.isoCode.toLowerCase(),
                isoCode: c.isoCode.toLowerCase(),
            })),
        []
    );

    const { control, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            contactMode: "",
            message: "",
            newsOffers: false,
            privacyPolicy: false
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    const onSubmit = (data) => {
        const payload = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone_number: data.phone,
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
                // eslint-disable-next-line no-alert
                alert("Something went wrong. Please try again.");
            },
        });
    };

    const selectedCountryCode = watch("country") || "in";


    return (
        <div className="contact-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
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
                        <Row className="g-5">
                            <Col lg={5}>
                                <motion.div
                                    className="contact-info-wrapper"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div className="title-with-border">
                                        <h2 className="bs-font-playfair-display text-white">
                                            GET IN TOUCH WITH US
                                        </h2>
                                    </div>

                                    <p className="text-white-50 contact-desc">
                                        Thank you for exploring our website! We’re always happy to connect with you. Whether you have a question, need assistance, or would like to share your feedback, our team is ready to help. Reach out to us through the contact details below or simply complete the contact form. We aim to respond to every inquiry as quickly as possible.
                                    </p>

                                    <div className="contact-items">
                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-comment-dots"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>Reach Us</h5>
                                                <p>
                                                    <a href="mailto:reachus.blanca@gmail.com">
                                                        <i className="fa-regular fa-comment-dots"></i> reachus.blanca@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-file-lines"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>OTHER INQUIRIES</h5>
                                                <p>+91 77700 55535 (Blanca Sales)</p>
                                                <p>+91 70219 13284 (Head Office Feedback and Complaints)</p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new border-0 pb-0 mb-0">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-map"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>ADDRESS:</h5>
                                                <p>
                                                    Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood,<br />
                                                    Navi Mumbai, 400706.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>

                            <Col lg={7}>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row className="g-4">
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
                                                {errors.firstName && <p className="text-danger small mt-1">{errors.firstName.message}</p>}
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
                                                {errors.lastName && <p className="text-danger small mt-1">{errors.lastName.message}</p>}
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
                                                {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
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
                                                            onCountryChange={(isoCode) => setValue("country", isoCode)}
                                                        />
                                                    )}
                                                />
                                                {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
                                            </Col>
                                            <Col md={6}>
                                                <Controller
                                                    name="country"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Field label="COUNTRY">
                                                            <div className="glass-input-wrapper overflow-visible">
                                                                <Select
                                                                    {...field}
                                                                    className="contact-country-select"
                                                                    classNamePrefix="contact-country-select"
                                                                    options={countryOptions}
                                                                    value={
                                                                        countryOptions.find(
                                                                            (option) =>
                                                                                option.value === field.value
                                                                        ) || null
                                                                    }
                                                                    onChange={(option) =>
                                                                        field.onChange(option ? option.value : "")
                                                                    }
                                                                    placeholder="-- select one --"
                                                                />
                                                            </div>
                                                        </Field>
                                                    )}
                                                />
                                                {errors.country && <p className="text-danger small mt-1">{errors.country.message}</p>}
                                            </Col>
                                            <Col md={6}>
                                                <Controller
                                                    name="contactMode"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            {...field}
                                                            label="PREFERRED MODE OF CONTACT"
                                                            options={[
                                                                { label: "PHONE", value: "phone" },
                                                                { label: "EMAIL", value: "email" }
                                                            ]}
                                                            selectedValue={field.value}
                                                        />
                                                    )}
                                                />
                                                {errors.contactMode && <p className="text-danger small mt-1">{errors.contactMode.message}</p>}
                                            </Col>
                                            <Col md={12}>
                                                <Controller
                                                    name="message"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <InputField
                                                            {...field}
                                                            as="textarea"
                                                            rows={3}
                                                            label="MESSAGE"
                                                            placeholder="YOUR MESSAGE"
                                                        />
                                                    )}
                                                />
                                                {errors.message && <p className="text-danger small mt-1">{errors.message.message}</p>}
                                            </Col>
                                            <Col md={6}>
                                                <Controller
                                                    name="newsOffers"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Checkbox
                                                            {...field}
                                                            label="I'd like to hear about news and offers."
                                                            checked={field.value}
                                                        />
                                                    )}
                                                />
                                                {errors.newsOffers && <p className="text-danger small mt-1">{errors.newsOffers.message}</p>}
                                            </Col>
                                            <Col md={6}>
                                                <Controller
                                                    name="privacyPolicy"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Checkbox
                                                            {...field}
                                                            label={<>I've read and agree to the <a href="/privacy-policy">Privacy Policy</a></>}
                                                            checked={field.value}
                                                        />
                                                    )}
                                                />
                                                {errors.privacyPolicy && <p className="text-danger small mt-1">{errors.privacyPolicy.message}</p>}
                                            </Col>
                                        </Row>
                                        <div className="submit-btn-contect-page mt-4">
                                            <button
                                                type="submit"
                                                className="theme-btn bs-font-montserrat"
                                                disabled={isPending}
                                            >
                                                {isPending ? "Sending..." : "Submit"}
                                            </button>
                                        </div>
                                    </Form>
                                </motion.div>
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
                message="Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements."
            />
        </div>
    );
};

export default Contact;
