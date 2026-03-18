import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import InputField from "../../components/common/InputField/InputField";
import TextArea from "../../components/common/TextArea/TextArea";
import Dropdown from "../../components/common/Dropdown/Dropdown";

const AgencyForm = ({
    control,
    activeTab,
    setActiveTab,
    agentType,
    individualAgentTypeLabel,
    isSubmitting,
    submitError
}) => {
    // CHANGE: Agency form extracted as-is (no field/behavior changes).
    return (
        <>
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
                                        options={["Agency Registration", individualAgentTypeLabel]}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e?.target?.value)}
                                    />
                                )}
                            />
                            {agentType === individualAgentTypeLabel && (
                                <p className="note-text mt-3">
                                    Note: On reference you will get reward. 
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
        </>
    );
};

export default AgencyForm;
