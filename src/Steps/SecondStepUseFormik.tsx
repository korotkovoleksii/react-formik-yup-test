import React from "react";
import { Field, Form, useFormikContext } from "formik";
import {
  Box,
  Grid,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ISignupValues } from "../utils/interfaces/SignupInterface";

const SecondStepUseFormik: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);
  const formik = useFormikContext<ISignupValues>();
  return (
    <Form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Field
                as={OutlinedInput}
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {formik.errors.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Grid>
          <Grid item>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm password
              </InputLabel>
              <Field
                as={OutlinedInput}
                id="outlined-adornment-password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setConfirmPassword(!showConfirmPassword)}
                      onMouseDown={() =>
                        setConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default SecondStepUseFormik;
