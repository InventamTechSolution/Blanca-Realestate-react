import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import InputField from "../../components/common/InputField/InputField";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import "./ragistration.css";
const RegistrationBg = "/images/background/registration-bg.png";

const Registration = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("personal-details");
    const [formData, setFormData] = useState({
        agentType: location.state?.agentType || "Individual Registration",
        gstin: "",
        name: "",
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
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (location.state?.agentType) {
            setFormData(prev => ({ ...prev, agentType: location.state.agentType }));
        }
    }, [location.state]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePhoneChange = (e) => {
        setFormData(prev => ({
            ...prev,
            phone: e.target.value
        }));
    };

    const handleDropdownChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="registration-page">
            <Preloader />
            {/* <Header /> */}
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
                                <Form className="registration-form" onSubmit={handleSubmit}>
                                    {/* ========================= */}
                                    {/* Tab 1: Personal Details */}
                                    {/* ========================= */}
                                    {activeTab === "personal-details" && (
                                        <div className="tab-content active">
                                            <div className="section-header">| Personal Details</div>

                                            <Row className="gx-4">
                                                <Col md={6} className="mb-4">
                                                    <Dropdown
                                                        label="Real Estate Agent Type*"
                                                        placeholder="-- select one --"
                                                        name="agentType"
                                                        options={["Agency Registration", "Individual Registration"]}
                                                        value={formData.agentType}
                                                        onChange={(e) => handleDropdownChange("agentType", e.target.value)}
                                                    />
                                                    {formData.agentType === "Individual Registration" && (
                                                        <p className="note-text mt-3">
                                                            Note: After verifying through DigiLocker, proceed by selecting Check Status.
                                                        </p>
                                                    )}
                                                </Col>
                                                {formData.agentType === "Agency Registration" && (
                                                    <Col md={6} className="mb-4">
                                                        <InputField
                                                            label="GSTIN"
                                                            placeholder="GSTIN"
                                                            name="gstin"
                                                            value={formData.gstin}
                                                            onChange={handleInputChange}
                                                            extra={<Button type="button" className="validate-btn">Validate</Button>}
                                                        />
                                                    </Col>
                                                )}
                                            </Row>
                                            <Row className="gx-4">

                                                <Col md={6}>
                                                    <InputField
                                                        label="Name *"
                                                        placeholder="Enter Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputField
                                                        label="Contact Person Name"
                                                        placeholder="Enter Contact Person"
                                                        name="contactPerson"
                                                        value={formData.contactPerson}
                                                        onChange={handleInputChange}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputField
                                                        label="Mobile Number *"
                                                        placeholder="Enter Mobile Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handlePhoneChange}
                                                        required
                                                        extra={<Button type="button" className="otp-btn">Send OTP</Button>}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputField
                                                        label="RERA Registration No."
                                                        placeholder="Enter RERA Number"
                                                        name="reraNo"
                                                        value={formData.reraNo}
                                                        onChange={handleInputChange}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputField
                                                        type="email"
                                                        label="Email *"
                                                        placeholder="Enter Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputField
                                                        label="PAN"
                                                        placeholder="Enter PAN Number"
                                                        name="pan"
                                                        value={formData.pan}
                                                        onChange={handleInputChange}
                                                    />
                                                </Col>

                                                {formData.agentType === "Individual Registration" && (
                                                    <Col md={12}>
                                                        <div className="aadhaar-group mt-2">
                                                            <Button type="button" className="aadhaar-btn">Verify Aadhaar</Button>
                                                            <Button type="button" className="check-status-btn">Check Status</Button>
                                                        </div>
                                                    </Col>
                                                )}
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

                                            <Row className="gx-4">
                                                <Col md={6}>
                                                    <div className="mb-4">
                                                        <Dropdown
                                                            label="Country *"
                                                            placeholder="India"
                                                            name="country"
                                                            options={["India"]}
                                                            value={formData.country}
                                                            onChange={(e) => handleDropdownChange("country", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <Dropdown
                                                            label="State *"
                                                            placeholder="Select State"
                                                            name="state"
                                                            options={["Maharashtra", "Gujarat", "Karnataka", "Delhi"]}
                                                            value={formData.state}
                                                            onChange={(e) => handleDropdownChange("state", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <Dropdown
                                                            label="City *"
                                                            placeholder="Select City"
                                                            name="city"
                                                            options={["Navi Mumbai", "Mumbai", "Pune", "Thane"]}
                                                            value={formData.city}
                                                            onChange={(e) => handleDropdownChange("city", e.target.value)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="mb-4">
                                                        <InputField
                                                            label="Address *"
                                                            placeholder="Enter Address"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputField
                                                            label="PinCode *"
                                                            placeholder="Enter PinCode"
                                                            name="pinCode"
                                                            value={formData.pinCode}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <p className="note-text mt-2">
                                                            Note*:Please enter 0 in PinCode if you don't have Pincode
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className="tab-nav-btns d-flex justify-content-between">
                                                <Button
                                                    type="button"
                                                    className="theme-btn"
                                                    onClick={() => setActiveTab("personal-details")}
                                                >
                                                    Previous
                                                </Button>

                                                <Button
                                                    type="submit"
                                                    className="theme-btn bs-font-montserrat"
                                                >
                                                    Register Now
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
        </div>
    );
};

export default Registration;
