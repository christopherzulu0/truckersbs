import * as yup from "yup";

export const reportSchema = yup.object({
    type: yup
    .string("Enter your type ")
    .required("type is required"),
    traffic: yup
    .string("Enter traffic percentage")
    .required("traffic percentage is required"),
    route: yup
    .string("Enter route")
    .required("route required"),
    condition: yup
    .string("Enter your condition of the place")
    .required("condition of the place is required"),
    attachment: yup
    .string("Select image")
    .required("image is required"),
    description: yup
    .string("Enter your description")
    .required("Description is required")
});

export const reportValues = {
  type: "",
  traffic: "",
  route: "",
  condition: "",
  attachment: "",
  description: "",
  time: ""
};