import * as Yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
const phoneRules =
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const usernameRules = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const nameRules = /^[A-Za-z ]+$/;

export const singUpSchemaValidation = Yup.object().shape({
  // codeCountry:
  numberPhone: Yup.string()
    .required("Required")
    .matches(phoneRules, "Is not in correct format"),
  username: Yup.string()
    .required("Required")
    .matches(usernameRules, "Is not in correct format"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(nameRules, "Is not in correct format"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(nameRules, "Is not in correct format"),
  conditions: Yup.bool().required("Required"),
  // DOB: Yup.date(),
  // password: "",
  // confirmPassword: "",
  // position: "",
  // timeSlots: [{ from: Date.now(), to: Date.now() }],
});
