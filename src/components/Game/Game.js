// @flow
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CodePin from "../CodePin/CodePin";

import { callApi } from "../../api";

import { connect } from "react-redux";
import { setCodePin } from "../../actions";

// Styles
import "./Game.scss";

const Game = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const codePin = useSelector((state) => state.codePin.codePin);

  useEffect(() => {
    callApi()
      .then((res) => {
        props.dispatchSetCodePin(res.codePin);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <CodePin setIsValid={setIsValid} setError={setError} codePin={codePin} />
      {isValid && <span>Felicitation, c'est le bon code !</span>}
      {error}
    </Fragment>
  );
};

Game.defaultProps = {
  name: "",
  value: "",
  label: "",
  className: "form-field-container",
  onChange: () => {},
};

const mapStateToProps = (state) => {
  return {
    codePin: state.codePin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetCodePin: (codePin) => dispatch(setCodePin(codePin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
