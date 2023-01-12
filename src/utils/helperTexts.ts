export const helperTexts = {
  stepOne: {
    phone: 'Phone number is invalid',
    username:
      'Username can only contain alphanumeric characters, underscore and dot.',
    name: 'Name can only contain alphabetic characters and spaces',
    DOB: 'You must be 18+ years old in order to continue',
    terms: 'You must read our terms and conditions',
  },
  stepTwo: {
    password:
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    password_match: 'Passwords should match',
  },
  stepThree: {
    timeslots: "Time slots shouldn't intersect",
  },
  required(fieldName: string) {
    return `${fieldName} is required`;
  },
  max(fieldName: string, max: number) {
    return `${fieldName} is limited to ${max} characters`;
  },
  min(fieldName: string, min: number) {
    return `${fieldName} requires at least ${min} characters`;
  },
};
