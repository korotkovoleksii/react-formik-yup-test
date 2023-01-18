import * as Yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
const phoneRules =
  /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const usernameRules = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const nameRules = /^[A-Za-z ]+$/;
const firstStepSingUpSchemaValidation = Yup.object().shape({
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
  conditions: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const secondStepSingUpSchemaValidation = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRules, "Password mast be correct")
    .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match")
    .min(8, "Too Short!")
    .max(64, "Too Long!"),
  confirmPassword: Yup.string()
    .required("ConfirmPassword is required")
    .matches(passwordRules, "ConfirmPassword mast be correct")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(8, "Too Short!")
    .max(64, "Too Long!"),
});
const thirdStepSingUpSchemaValidation = Yup.object().shape({
  position: Yup.string().required("position is required"),
});
export const arrayStepsSchemaValidation = [
  firstStepSingUpSchemaValidation,
  secondStepSingUpSchemaValidation,
  thirdStepSingUpSchemaValidation,
];

// export const singUpSchemaValidation = Yup.object().shape({
//   // codeCountry:
//   // DOB: Yup.date(),
//   // timeSlots: [{ from: Date.now(), to: Date.now() }],
// });
