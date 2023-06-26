import * as yup from "yup";

export const planRouteSchema = yup.object({
  hours: yup.string("Enter your hours of driving ").required("Hours of driving is required"),
  intermediateStop: yup
    .string("Enter your intermediate stop")
    .required("Intermediate stop is required"),
});

export const planRouteValues = {
  hours: "",
  intermediateStop: "",
};
