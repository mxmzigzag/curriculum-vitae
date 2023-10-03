import * as yup from "yup";

export const schema = yup.object({
  fullname: yup.string().required("Enter your fullname"),
  email: yup.string().email().required("Enter your e-mail"),
  subject: yup.string().required("Enter your subject"),
  message: yup.string().required("Enter your message"),
});
