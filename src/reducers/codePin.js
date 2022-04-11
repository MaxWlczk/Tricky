const codePin = (state = {}, action) => {
  switch (action.type) {
    case "SET_CODE_PIN":
      return {
        codePin: action.codePin,
      };

    default:
      return state;
  }
};

export default codePin;
