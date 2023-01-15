import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { ISecondStepSU } from "../utils/interfaces/SignupInterface";
import { FormikProps, useFormik } from "formik";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SecondStepUseFormik: React.FC<FormikProps<ISecondStepSU>> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}: FormikProps<ISecondStepSU>) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);

  return (
    <form
      autoComplete="off"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Grid container direction="column" spacing={2}>
        {/* <Grid item> */}
        {/* <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid> */}
        {/* <Grid item>
          <TextField
            name="confirm-password"
            label="Confirm password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid> */}
        <Grid item>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setConfirmPassword(!showConfirmPassword)}
                    onMouseDown={() => setConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default SecondStepUseFormik;
