import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Modal from "../../common/Modal/Modal";
import "./JobApplyModal.css";
import InputField from "../../common/InputField/InputField";
import PhoneInput from "../../common/PhoneInput/PhoneInput";
import Dropdown from "../../common/Dropdown/Dropdown";
import FileUpload from "../../common/FileUpload/FileUpload";
import TextArea from "../../common/TextArea/TextArea";
import ThemeButton from "../../common/Button/ThemeBtn";

const JobApplyModal = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        position: jobTitle || "",
        resume: null,
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add submission logic here (e.g., API call)
        alert("Application submitted successfully!");
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Apply For Position"
            size="lg"
        >
            <Form onSubmit={handleSubmit} className="job-apply-form">
                <Row>
                    <Col md={6}>
                        <InputField
                            label="Full Name"
                            placeholder="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col md={6}>
                        <InputField
                            label="Email Address"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col md={6}>
                        <PhoneInput
                            label="PHONE NUMBER"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col md={6}>
                        <Dropdown
                            label="What position are you applying for?"
                            placeholder="Select Position"
                            name="position"
                            options={["Sales Manager", "Real Estate Consultant", "Digital Marketing Executive", "Architectural Designer", "Customer Relationship Manager", "Other"]}
                            value={formData.position}
                            onChange={(val) => handleDropdownChange("position", val)}
                        />
                    </Col>
                    <Col md={12}>
                        <FileUpload
                            label="Upload Resume"
                            name="resume"
                            value={formData.resume}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col md={12}>
                        <TextArea
                            label="What makes you a great fit for Art & Architecture Associates?"
                            name="description"
                            rows={3}
                            placeholder="Describe your experience and why you are interested..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Row>
                <div >
                    {/* <button type="submit" className="theme-btn w-100 py-3">
                            Submit Application
                            <Icon icon="lucide:send" className="ms-2" />
                        </button> */}
                    <ThemeButton
                        type="submit"
                        className="w-100 py-3"
                    >
                        Submit Application
                        <Icon icon="lucide:send" className="ms-2" />
                    </ThemeButton>
                </div>
            </Form>
        </Modal>
    );
};

export default JobApplyModal;
