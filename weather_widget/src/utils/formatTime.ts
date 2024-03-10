import { format } from "date-fns";

type InputValue = Date | string | number | null | undefined;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy p";
  const dt = date ? new Date(date) : new Date();
  dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());

  return date ? format(dt, fm) : "";
}
