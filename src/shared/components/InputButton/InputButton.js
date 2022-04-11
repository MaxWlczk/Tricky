// @flow
import React, { useState } from "react";

// Styles
import "./InputButton.scss";

const InputButton = (props) => {
  const { name, value, onClick, className } = props;

  const handleClick = ({ target }) => {
    onClick(target.value);
  };

  const htmlFor = `input-${name}`;

  return (
    <input
      id={htmlFor}
      name={name}
      value={value}
      type="button"
      className={className}
      onClick={(e) => handleClick(e)}
    />
  );
};

InputButton.defaultProps = {
  name: "",
  value: "",
  label: "",
  className: "form-field-container",
  onChange: () => {},
};

export default InputButton;
