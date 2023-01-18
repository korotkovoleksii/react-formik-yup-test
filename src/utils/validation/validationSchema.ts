import * as Yup from "yup";
import { helperTexts } from "../helperTexts";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
const phoneRules =
  /^((\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const usernameRules = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const nameRules = /^[A-Za-z ]+$/;

const firstStepSingUpSchemaValidation = Yup.object().shape({
  numberPhone: Yup.string()
    .required(helperTexts.required("Number Phone"))
    .matches(phoneRules, helperTexts.stepOne.phone),
  username: Yup.string()
    .required(helperTexts.required("Username"))
    .matches(usernameRules, helperTexts.stepOne.username),
  firstName: Yup.string()
    .min(2, helperTexts.min("First name", 2))
    .max(20, helperTexts.max("First name", 20))
    .matches(nameRules, helperTexts.stepOne.name),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(nameRules, helperTexts.stepOne.lastName),
  conditions: Yup.boolean()
    .required(helperTexts.required("Terms"))
    .oneOf([true], helperTexts.stepOne.terms),
});
const secondStepSingUpSchemaValidation = Yup.object().shape({
  password: Yup.string()
    .required(helperTexts.required("Password"))
    .matches(passwordRules, helperTexts.stepTwo.password)
    .oneOf(
      [Yup.ref("confirmPassword"), null],
      helperTexts.stepTwo.password_match
    )
    .min(8, helperTexts.min("Password", 8))
    .max(64, helperTexts.max("Password", 64)),

  confirmPassword: Yup.string()
    .required(helperTexts.required("Confirm password"))
    .matches(passwordRules, helperTexts.stepTwo.password)
    .oneOf([Yup.ref("password"), null], helperTexts.stepTwo.password_match)
    .min(8, helperTexts.min("Confirm password", 8))
    .max(64, helperTexts.max("Confirm password", 64)),
});
const thirdStepSingUpSchemaValidation = Yup.object().shape({
  position: Yup.string().required(helperTexts.required("Position")),
});
export const arrayStepsSchemaValidation = [
  firstStepSingUpSchemaValidation,
  secondStepSingUpSchemaValidation,
  thirdStepSingUpSchemaValidation,
];
