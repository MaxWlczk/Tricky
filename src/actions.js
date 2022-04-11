export const SUBMIT_CODE_PIN = "SUBMIT_CODE_PIN";
export const SET_CODE_PIN = "SET_CODE_PIN";

export function setCodePin(codePin) {
  return { type: SET_CODE_PIN, codePin };
}
