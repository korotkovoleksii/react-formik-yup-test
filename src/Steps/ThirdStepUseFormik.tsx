import React from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IThirdStepSU } from "../utils/interfaces/SignupInterface";
import {
  FieldArray,
  Formik,
  FormikProps,
  Form,
  Field,
  useFormikContext,
} from "formik";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const positions = [
  "Developer",
  "Designer",
  "Quality assurance",
  "Business Analyst",
  "Human Resources",
];

const CustomizedSelectForFormik = ({
  children,
  form,
  field,
  label,
  variant,
}: any) => {
  const { name, value, id } = field;
  const { setFieldValue } = form;

  return (
    <FormControl fullWidth>
      <InputLabel id="position-label111111">{label}</InputLabel>
      <Select
        id={id}
        name={name}
        labelId={"position-label111111"}
        label={label}
        value={value}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

const ThirdStepUseFormik: React.FC<{
  initValue: IThirdStepSU;
  submit: () => void;
}> = ({
  initValue,
  submit,
}: {
  initValue: IThirdStepSU;
  submit: () => void;
}) => {
  const [value] = React.useState<number | null>(Date.now());

  return (
    <>
      <Formik
        initialValues={{
          ...initValue,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        render={({ values }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Form>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Field
                      name="position"
                      component={CustomizedSelectForFormik}
                      id="position"
                      label={"Position"}
                      variant="outlined"
                    >
                      {positions.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                  <FieldArray
                    name="timeSlots"
                    render={(arrayHelpers) => (
                      <Grid item container>
                        <Grid
                          item
                          container
                          xs={9}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                        >
                          {values.timeSlots.map((item, index) => (
                            <Grid item container key={index} spacing={2}>
                              <Grid item xs>
                                <TimePicker
                                  label="From"
                                  value={item.from}
                                  onChange={() => {}}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </Grid>
                              <Grid item xs>
                                <TimePicker
                                  label="To"
                                  value={item.to}
                                  onChange={() => {}}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item container xs={3}>
                          <Grid item>
                            <IconButton
                              aria-label="add"
                              color="success"
                              size="large"
                              disabled={values.timeSlots.length >= 5}
                              onClick={() => {
                                arrayHelpers.push({ from: value, to: value });
                              }}
                            >
                              <AddCircleOutlineIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton
                              aria-label="delete"
                              color="error"
                              size="large"
                              disabled={values.timeSlots.length <= 1}
                              onClick={() => {
                                arrayHelpers.remove(
                                  values.timeSlots?.length - 1
                                );
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  />
                </Grid>
              </Form>
            </LocalizationProvider>
          );
        }}
      />
    </>
  );
};

export default ThirdStepUseFormik;
