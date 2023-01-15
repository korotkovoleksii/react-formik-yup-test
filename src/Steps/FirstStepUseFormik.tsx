import * as React from "react";
import dayjs, { Dayjs } from "dayjs";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { Link, MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Field, Formik, FormikProps, useField, useFormik } from "formik";
import { IFirstStepSU } from "../utils/interfaces/SignupInterface";

import phoneCodes from "../utils/phoneCodes.json";

const FirstStepUseFormik: React.FC<FormikProps<IFirstStepSU>> = (
  props: FormikProps<IFirstStepSU>
) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = props;
  const [phone, setPhone] = React.useState("");

  return (
    <form
      autoComplete="off"
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <MuiTelInput
            id="numberPhone"
            name="numberPhone"
            value={values.numberPhone}
            onChange={(value) => {
              setFieldValue("numberPhone", value);
            }}
            fullWidth
          />
          {/* <Grid item xs={4}>`
            <Select fullWidth>
              {phoneCodes.map((item) => (
                <MenuItem divider={true} value={item.code}>
                  {item.name} {item.dial_code}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="numberPhone"
              name="numberPhone"
              value={values.numberPhone}
              onChange={handleChange}
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Grid> */}
        </Grid>

        <Grid item>
          <TextField
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            label="Username"
            variant="outlined"
            type="tel"
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            label="First name"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            label="Last name"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="MM/DD/YYYY"
              value={values.DOB}
              onChange={handleChange}
              renderInput={(params: any) => (
                <TextField variant="outlined" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                id="conditions"
                name="conditions"
                checked={values.conditions}
                onChange={handleChange}
              />
            }
            label=<Link
              target="_blank"
              href="http://www.example.com"
              underline="none"
            >
              I agree to terms & conditions
            </Link>
            name="policy"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FirstStepUseFormik;
