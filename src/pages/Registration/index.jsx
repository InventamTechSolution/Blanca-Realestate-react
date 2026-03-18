import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useRegisterChannelPartner } from '../../hooks/useChannelPartner';
import Preloader from '../../components/common/Preloader';
import Header from '../../components/layout/Header/Header';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import InputField from "../../components/common/InputField/InputField";
import TextArea from "../../components/common/TextArea/TextArea";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import ThankYouModal from "../../components/common/ThankYouModal/ThankYouModal";
import "./ragistration.css";

const RegistrationBg = "/images/background/registration-bg.png";

const defaultValues = {
    agentType: location.state?.agentType || "Individual Registration",
            gstin: "",
            fullname: "",
            contactPerson: "",
            phone: "",
            reraNo: "",
            email: "",
            pan: "",
            country: "India",
            state: "",
            city: "",
            address: "",
            pinCode: "",
            newsOffers: false,
            privacyPolicy: false
}

const Registration = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("personal-details");
    const [showThankYou, setShowThankYou] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const { mutateAsync: registerPartner, isPending: isSubmitting } =
        useRegisterChannelPartner();

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset
    } = useForm({
        defaultValues,
        // resolver: yupResolver(channelPartnerSchema),
    });

    const agentType = watch("agentType");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (location.state?.agentType) {
            setValue("agentType", location.state.agentType, { shouldDirty: false });
        }
    }, [location.state, setValue]);

    const onSubmit = async (data) => {
        setSubmitError("");

        const agent_type =
            data.agentType === "Individual Registration"
                ? "individual"
                : data.agentType === "Agency Registration"
                    ? "agency"
                    : String(data.agentType || "").toLowerCase();

        const payload = {
            fullname: data.fullname || "",
            agent_type,
            phone_number: data.phone || "",
            email: data.email || "",
            country: data.country || "",
            pincode: data.pinCode || "",
            address: data.address || "",
            gstin: data.gstin || "",
            contact_name: data.contactPerson || "",
            rera_number: data.reraNo || "",
            pan_number: data.pan || ""
        };

        try {
            await registerPartner(payload);
            setShowThankYou(true);
            reset();
        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Something went wrong. Please try again.";
            setSubmitError(message);
        }
    };


    return (
        <div className="registration-page">
            <Preloader />
            <Header />
            <main>
                <SmallHeroBanner title="Channel Partner Registration" description="" image={RegistrationBg} showBackButton={true} />

                <section className="registration-form-section">
                    <Container>
                        <div className="registration-tab-wrapper">

                            {/* Sidebar Navigation */}
                            <div className="reg-sidebar">
                                <div
                                    className={`reg-tab-btn ${activeTab === "personal-details" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("personal-details")}
                                >
                                    <div className="tab-icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="tab-text">
                                        <span className="tab-title">Personal Details</span>
                                        <span className="tab-sub">Enter Basic info</span>
                                    </div>
                                </div>

                                <div
                                    className={`reg-tab-btn ${activeTab === "address-details" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("address-details")}
                                >
                                    <div className="tab-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="tab-text">
                                        <span className="tab-title">Address</span>
                                        <span className="tab-sub">Add Address</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Form Area */}
                            <div className="reg-main-content">
                                <Form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                                    {/* ========================= */}
                                    {/* Tab 1: Personal Details */}
                                    {/* ========================= */}
                                    {activeTab === "personal-details" && (
                                        <div className="tab-content active">
                                            <div className="section-header">| Personal Details</div>

                                            <Row className="gx-4 gy-4 mb-4">
                                                <Col md={6}>
                                                    <Controller
                                                        name="agentType"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <Dropdown
                                                                label="Real Estate Agent Type*"
                                                                placeholder="-- select one --"
                                                                name={field.name}
                                                                options={["Agency Registration", "Individual Registration"]}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e?.target?.value)}
                                                            />
                                                        )}
                                                    />
                                                    {agentType === "Individual Registration" && (
                                                        <p className="note-text mt-3">
                                                            Note: After verifying through DigiLocker, proceed by selecting Check Status.
                                                        </p>
                                                    )}
                                                </Col>
                                                {agentType === "Agency Registration" && (
                                                    <Col md={6}>
                                                        <Controller
                                                            name="gstin"
                                                            control={control}
                                                            render={({ field }) => (
                                                                <InputField
                                                                    label="GSTIN"
                                                                    placeholder="GSTIN"
                                                                    name={field.name}
                                                                    value={field.value}
                                                                    onChange={(e) => field.onChange(e.target.value)}
                                                                    // extra={<Button type="button" className="validate-btn">Validate</Button>}
                                                                />
                                                            )}
                                                        />
                                                    </Col>
                                                )}
                                            </Row>
                                            <Row className="gx-4 gy-4">

                                                <Col md={6}>
                                                    <Controller
                                                        name="fullname"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="Name *"
                                                                placeholder="Enter Name"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="contactPerson"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="Contact Person Name"
                                                                placeholder="Enter Contact Person"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="phone"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="Mobile Number *"
                                                                placeholder="Enter Mobile Number"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                required
                                                                // extra={<Button type="button" className="otp-btn">Send OTP</Button>}
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="reraNo"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="RERA Registration No."
                                                                placeholder="Enter RERA Number"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="email"
                                                        control={control}
                                                        rules={{
                                                            required: true,
                                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                                        }}
                                                        render={({ field }) => (
                                                            <InputField
                                                                type="email"
                                                                label="Email *"
                                                                placeholder="Enter Email"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="pan"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="PAN"
                                                                placeholder="Enter PAN Number"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                            />
                                                        )}
                                                    />
                                                </Col>

                                                {/* {formData.agentType === "Individual Registration" && (
                                                    <Col md={12}>
                                                        <div className="aadhaar-group mt-2">
                                                            <Button type="button" className="aadhaar-btn">Verify Aadhaar</Button>
                                                            <Button type="button" className="check-status-btn">Check Status</Button>
                                                        </div>
                                                    </Col>
                                                )} */}
                                            </Row>

                                            <div className="tab-nav-btns mt-5">
                                                <Button
                                                    type="button"
                                                    className="theme-btn"
                                                    onClick={() => setActiveTab("address-details")}
                                                >
                                                    Next: Address
                                                </Button>
                                            </div>
                                        </div>
                                    )}

                                    {/* ========================= */}
                                    {/* Tab 2: Address */}
                                    {/* ========================= */}
                                    {activeTab === "address-details" && (
                                        <div className="tab-content active">
                                            <div className="section-header">| Address Details</div>

                                            <Row className="gx-4 gy-4">
                                                <Col md={6}>
                                                    <Controller
                                                        name="country"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <Dropdown
                                                                label="Country *"
                                                                placeholder="India"
                                                                name={field.name}
                                                                options={["India"]}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e?.target?.value)}
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Controller
                                                        name="pinCode"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <InputField
                                                                label="PinCode *"
                                                                placeholder="Enter PinCode"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                required
                                                            />
                                                        )}
                                                    />
                                                    <p className="note-text mt-2">
                                                        Note*:Please enter 0 in PinCode if you don't have Pincode
                                                    </p>
                                                </Col>
                                                <Col md={12}>
                                                    <Controller
                                                        name="address"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <TextArea
                                                                label="Address *"
                                                                placeholder="Enter Address"
                                                                name={field.name}
                                                                value={field.value}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                required
                                                            />
                                                        )}
                                                    />
                                                </Col>
                                            </Row>

                                            {submitError ? (
                                                <div className="mt-3">
                                                    <p className="text-danger mb-0">{submitError}</p>
                                                </div>
                                            ) : null}

                                            <div className="tab-nav-btns d-flex justify-content-between">
                                                <Button
                                                    type="button"
                                                    className="theme-btn"
                                                    onClick={() => setActiveTab("personal-details")}
                                                    disabled={isSubmitting}
                                                >
                                                    Previous
                                                </Button>

                                                <Button
                                                    type="submit"
                                                    className="theme-btn bs-font-montserrat"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Submitting..." : "Register Now"}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            {/* <Footer /> */}
            <ScrollToTop />
            <ThankYouModal
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
                title="Registration Successful"
                message="Thank you for registering as a Blanca Channel Partner! Our team will review your application and get in touch with you shortly."
            />
        </div>
    );
};

export default Registration;
