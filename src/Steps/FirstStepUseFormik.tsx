import * as React from "react";
import {
  Box,
  Link,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
        <Grid item container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="codeCountryIdLabel">Code country</InputLabel>
              <Field
                as={Select}
                name="codeCountry"
                variant="outlined"
                labelId="codeCountryIdLabel"
                label="Code country"
                fullWidth
              >
                {phoneCodes.map((item) => (
                  <MenuItem value={item.dial_code} key={item.code}>
                    {item.code} {item.dial_code}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <Field
              as={TextField}
              name="numberPhone"
              variant="outlined"
              label="Phone number"
              fullWidth
            />
            {formik.errors.numberPhone && formik.touched.numberPhone ? (
              <div>{formik.errors.numberPhone}</div>
            ) : null}
          </Grid>
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
          ></Field>
          {formik.errors.username && formik.touched.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="firstName"
            label="First Name"
            fullWidth
          ></Field>
          {formik.errors.firstName && formik.touched.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </Grid>

        <Grid item>
          <Field
            as={TextField}
            name="lastName"
            label="Last name"
            variant="outlined"
            fullWidth
          ></Field>
          {formik.errors.lastName && formik.touched.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
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
        {formik.errors.conditions && formik.touched.conditions ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </Grid>
    </Box>
  );
};

export default FirstStepUseFormik;
