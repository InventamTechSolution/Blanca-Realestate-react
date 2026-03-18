import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import InputField from "../../components/common/InputField/InputField";
import IndividualFields from "./IndividualFields";

const IndividualForm = ({
    control,
    activeTab,
    setActiveTab,
    agentType,
    individualAgentTypeLabel,
    isSubmitting,
    submitError,
    watch
}) => {
    // CHANGE: Individual form extracted into its own component.
    const heardAboutUs = watch("heardAboutUs");

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
                        {/* CHANGE: moved Name field beside Real Estate Agent Type* */}
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
                    </Row>

                    {/* CHANGE: name is rendered above; exclude it here to avoid duplication */}
                    <IndividualFields control={control} exclude={["fullname"]} />

                    <div className="tab-nav-btns mt-5">
                        <Button
                            type="button"
                            className="theme-btn"
                            onClick={() => setActiveTab("address-details")}
                        >
                            Next: Refer
                        </Button>
                    </div>
                </div>
            )}

            {/* ========================= */}
            {/* Tab 2: Refer */}
            {/* ========================= */}
            {activeTab === "address-details" && (
                <div className="tab-content active">
                    <div className="section-header">| Refer</div>

                    {/* CHANGE: add spacing between refer inputs */}
                    <Row className="gx-4 gy-4 mb-4">
                        <Col md={6}>
                            {/* CHANGE: "How did you hear about us?" dropdown for Individual only. */}
                            <Controller
                                name="heardAboutUs"
                                control={control}
                                render={({ field }) => (
                                    <Dropdown
                                        label="How did you hear about us?"
                                        placeholder="-- select one --"
                                        name={field.name}
                                        options={["Friends", "Family", "Others"]}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e?.target?.value)}
                                    />
                                )}
                            />
                        </Col>
                        {/* CHANGE: keep Name beside Refer dropdown (same layout as Personal Details). */}
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
                    </Row>

                    {/* CHANGE: show the SAME Individual fields on first render (no gating by refer selection). */}
                    {/** Keeping names identical intentionally so it edits the same form fields (no new payload changes). */}
                    <IndividualFields control={control} exclude={["fullname"]} />

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

export default IndividualForm;
