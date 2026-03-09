import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import Field from "../Field/Field";
import "../InputField/Input.css";
import "./PhoneInput.css";
import InputField from "../InputField/InputField";

const PhoneInput = ({
    label,
    placeholder = "XXXXXXXXX",
    required = false,
    value,
    onChange,
    name,
    className = ""
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: "India",
        flag: "https://flagcdn.com/w20/in.png",
        code: "+91"
    });

    const dropdownRef = useRef(null);
    const wrapperRef = useRef(null);

    const countries = [
        { name: "India", flag: "https://flagcdn.com/w20/in.png", code: "+91" },
        { name: "UAE", flag: "https://flagcdn.com/w20/ae.png", code: "+971" },
        { name: "USA", flag: "https://flagcdn.com/w20/us.png", code: "+1" }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowDropdown(false);
    };

    return (
        <Field label={label} className={className}>
            <div
                ref={wrapperRef}
                className={`phone-input-wrapper glass-input-wrapper ${showDropdown ? "z-index-high overflow-visible" : ""}`}
            >
                <div className="country-code" onClick={() => setShowDropdown(!showDropdown)}>
                    <img
                        src={selectedCountry.flag}
                        alt={`${selectedCountry.name} Flag`}
                        className="selected-flag"
                    />
                    <i className="fa-solid fa-angle-down"></i>

                    <ul className={`country-dropdown ${showDropdown ? "show" : ""}`}>
                        {countries.map((country) => (
                            <li
                                key={country.name}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCountrySelect(country);
                                }}
                            >
                                <img src={country.flag} alt={country.name} /> {country.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    className="form-control-new"
                    required={required}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            </div>
        </Field>
    );
};

export default PhoneInput;
