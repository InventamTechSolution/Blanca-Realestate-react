/** react-select v5 theme for dark contact forms (classNames still use contact-country-select__*) */
export const contactCountrySelectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    boxShadow: "none",
    minHeight: 55,
    cursor: "pointer",
    borderRadius: 5,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: 20,
    paddingRight: 12,
  }),
  singleValue: (base) => ({
    ...base,
    color: "rgba(255, 255, 255, 0.9)",
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(255, 255, 255, 0.55)",
  }),
  input: (base) => ({
    ...base,
    color: "#ffffff",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#161616",
    borderRadius: 8,
    marginTop: 6,
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    zIndex: 10050,
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: "#161616",
    maxHeight: 220,
    paddingTop: 4,
    paddingBottom: 4,
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px 16px",
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: state.isFocused
      ? "rgba(74, 118, 201, 0.35)"
      : state.isSelected
        ? "var(--primary-color, #8c2a3c)"
        : "#161616",
    cursor: "pointer",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 10050,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#ffffff",
    "&:hover": {
      color: "#ffffff",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
