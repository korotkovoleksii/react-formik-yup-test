import * as Yup from 'yup';

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
const phoneRules =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const usernameRules = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const nameRules = /^[A-Za-z ]+$/;
