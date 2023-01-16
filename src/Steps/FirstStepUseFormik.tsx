import * as React from "react";
import {
  Box,
  Link,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Field, useFormikContext } from "formik";
import { ISignupValues } from "../utils/interfaces/SignupInterface";

import phoneCodes from "../utils/phoneCodes.json";

const FirstStepUseFormik: React.FC = () => {
  const formik = useFormikContext<ISignupValues>();
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
            as={TextField}
            name="numberPhone"
            variant="outlined"
            label="Phone number"
            fullWidth
          />
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
          ></Field>
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="firstName"
            label="First Name"
            fullWidth
          ></Field>
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="lastName"
            label="Last name"
            variant="outlined"
            fullWidth
          ></Field>
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="MM/DD/YYYY"
              value={formik.values.DOB}
              onChange={(newDate) => {
                formik.setFieldValue("DOB", newDate);
              }}
              renderInput={(params: any) => (
                <TextField variant="outlined" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Field as={Checkbox} name="conditions" />}
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
