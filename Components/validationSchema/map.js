import * as yup from "yup";

export const mapSchema = yup.object({
  from: yup
    .string("Enter your from ")
    .required("From is required"),
    destination: yup
    .string("Enter your destination place")
    .required("Destination is required"),
    startTime: yup
    .string("Enter your start off time")
    .required("Start off timeis required"),
    firstStop: yup
    .string("Enter your first stop")
    .required("First stop is required"),
});

export const mapValues = {
  from: "",
  destination: "",
  startTime: "",
  firstStop: "",
};
