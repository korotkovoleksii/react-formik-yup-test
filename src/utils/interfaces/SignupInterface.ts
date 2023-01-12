export interface ISignupValues
  extends IFirstStepSU,
    ISecondStepSU,
    IThirdStepSU {}
import dayjs, { Dayjs } from "dayjs";
export interface IFirstStepSU {
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
  from: string;
  to: string;
}
type Arr<T> = [T, ...T[]];
export interface IThirdStepSU {
  position: string;
  timeSlots?: Arr<ITimeSlot>;
}
