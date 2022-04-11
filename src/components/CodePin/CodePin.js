// @flow
import React, { useState } from "react";
import classnames from "clsx";

import InputButton from "../../shared/components/InputButton/InputButton";

import "./CodePin.scss";

const CodePin = (props) => {
  const { setIsValid, setError, codePin } = props;
  const [result, setResult] = useState("");
  const [flashing, setFlashing] = useState(false);

  const onClick = (value) => {
    if (result.length < 4) setResult(result + value);
  };

  const onResetCode = () => {
    setResult("");
    setIsValid(false);
    setError("");
  };

  const onValidCode = () => {
    if (result.length > 3) {
      if (result === codePin) {
        setError("");
        setIsValid(true);
      } else {
        setError("Mauvais code");
        setIsValid(false);
      }
    } else {
      setErrorRepeatedly();
    }
  };

  const setErrorRepeatedly = () => {
    const value = result;

    setResult("TOO SHORT");
    setFlashing(true);
    setTimeout(() => {
      setResult(value);
      setFlashing(false);
    }, 3000);
  };

  const displayClassNames = classnames({
    "code-pin-display": true,
    flashing: flashing,
  });

  return (
    <div className="code-pin-container">
      <p className={displayClassNames}>{result}</p>
      <div className="button-container">
        <InputButton
          value="1"
          name="one"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="2"
          name="two"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="3"
          name="three"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="4"
          name="four"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="5"
          name="five"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="6"
          name="six"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="7"
          name="seven"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="8"
          name="eight"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="9"
          name="nine"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="X"
          name="reset"
          className="col-container-4"
          onClick={onResetCode}
        />
        <InputButton
          value="0"
          name="ten"
          className="col-container-4"
          onClick={onClick}
        />
        <InputButton
          value="&#x2713;"
          name="valid"
          className="col-container-4"
          onClick={onValidCode}
        />
      </div>
    </div>
  );
};

CodePin.defaultProps = {
  setIsValid: () => {},
  setError: () => {},
};

export default CodePin;
