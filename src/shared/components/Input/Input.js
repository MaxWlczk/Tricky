// @flow
import React, { useState } from "react";

// Styles
import "./Input.scss";

const Input = (props) => {
  const { name, value, onChange } = props;

  const [error, setError] = useState(false);

  const handleChange = ({ target }): void => {
    const newValue = target.value;

    onChange(name, newValue);
  };

  const htmlFor = `form-field-input-${name}`;

  return (
    <input
      id={htmlFor}
      name={name}
      value={value}
      type="text"
      onChange={(e) => handleChange(e)}
    />
  );
};

Input.defaultProps = {
  name: "",
  value: "",
  label: "",
  className: "form-field-container",
  onChange: () => {},
};

export default Input;
