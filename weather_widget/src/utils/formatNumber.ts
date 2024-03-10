import numeral from "numeral";

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}
