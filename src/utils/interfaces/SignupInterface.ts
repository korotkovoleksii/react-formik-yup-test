import dayjs, { Dayjs } from "dayjs";
export interface ITimeSlot {
  from: number | null;
  to: number | null;
}
type Arr<T> = [T, ...T[]];

export interface ISignupValues {
  numberPhone: string;
  username: string;
  firstName: string;
  lastName: string;
  DOB: Dayjs | null;
  conditions: boolean;
  password: string;
  confirmPassword: string;
  position: string;
  timeSlots: Arr<ITimeSlot>;
}
