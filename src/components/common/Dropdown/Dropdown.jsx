import React from "react";
import { Form } from "react-bootstrap";
import Field from "../Field/Field";
import "../InputField/Input.css";
import "./Dropdown.css";

const Dropdown = ({
    label,
    options = [],
    required = false,
    value,
    onChange,
    name,
    className = "",
    placeholder
}) => {
    return (
        <Field label={label} className={className}>
            <div className="glass-input-wrapper">
                <Form.Select
                    className="form-control-new"
                    required={required}
                    value={value}
                    onChange={onChange}
                    name={name}
                >
                    {placeholder && <option value="" disabled>{placeholder}</option>}
                    {options.map((option, index) => (
                        <option key={index} value={option.value || option}>
                            {option.label || option}
                        </option>
                    ))}
                </Form.Select>
            </div>
        </Field>
    );
};

export default Dropdown;
