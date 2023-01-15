import * as React from "react";
import dayjs, { Dayjs } from "dayjs";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { Box, Link, MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Field,
  Formik,
  FormikProps,
  useField,
  useFormik,
  useFormikContext,
} from "formik";
import {
  IFirstStepSU,
  ISignupValues,
} from "../utils/interfaces/SignupInterface";

import phoneCodes from "../utils/phoneCodes.json";

const FirstStepUseFormik: React.FC = () => {
  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   setFieldValue,
  //   isSubmitting,
  // } = props;
  // const [phone, setPhone] = React.useState("");
  const formik = useFormikContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Field
            // value={formik.values.values.numberPhone}
            name="phoneNumber"
            // id="phoneNumber"

            fullWidth
            render={() => {
              <TextField
                name="phoneNumber"
                label="Phone Number"
                onChange={formik.handleChange}
                variant="outlined"
              />;
            }}
          />
        </Grid>

        <Grid item>
          <Field
            component={TextField}
            // value={formik.values.values.username}
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
          ></Field>
          {/* <TextField
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            label="Username"
            variant="outlined"
            type="tel"
            fullWidth
          /> */}
        </Grid>

        <Grid item>
          <Field
            component={TextField}
            name="firstName"
            label="First Name"
            // value={formik.values.values.firstName}
            fullWidth
          ></Field>
          {/* <TextField
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            label="First name"
            variant="outlined"
            fullWidth
          /> */}
        </Grid>

        <Grid item>
          <Field
            component={TextField}
            name="lastName"
            // value={formik.values.values.lastName}
            label="Last name"
            variant="outlined"
            fullWidth
          ></Field>
          {/* <TextField
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            label="Last name"
            variant="outlined"
            fullWidth
          /> */}
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Field
              component={DesktopDatePicker}
              label="Date of birth"
              inputFormat="MM/DD/YYYY"
              // value={formik.values.values.DOB}
              // onChange={handleChange}
              renderInput={(params: any) => (
                <TextField variant="outlined" fullWidth {...params} />
              )}
            />
            {/* <DesktopDatePicker
            
            /> */}
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={
              <Field
                component={Checkbox}
                name="conditions"
                // checked={formik.values.values.conditions}
              />
              // <Checkbox
              //   id="conditions"
              //   name="conditions"
              //   checked={values.conditions}
              //   onChange={handleChange}
              // />
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
    </Box>
  );
};

export default FirstStepUseFormik;
