import dayjs, { Dayjs } from "dayjs";
export interface ITimeSlot {
  from: number | null;
  to: number | null;
}
type Arr<T> = [T, ...T[]];

export interface ISignupValues
  extends IFirstStepSU,
    ISecondStepSU,
    IThirdStepSU {}

export interface IFirstStepSU {
  codeCountry: string;
  numberPhone: string;
  username: string;
  firstName: string;
  lastName: string;
  DOB: Dayjs | null;
  conditions: boolean;
}
export interface ISecondStepSU {
  password: string;
  confirmPassword: string;
}
export interface ITimeSlot {
  from: number | null;
  to: number | null;
}
// type Arr<T> = [T, ...T[]];
export interface IThirdStepSU {
  position: string;
  timeSlots: Arr<ITimeSlot>;
}
