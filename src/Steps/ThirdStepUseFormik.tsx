import React from "react";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FieldArray, Field, useFormikContext } from "formik";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { ISignupValues } from "../utils/interfaces/SignupInterface";

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

const ThirdStepUseFormik: React.FC = () => {
  const [value] = React.useState<number | null>(Date.now());
  const formik = useFormikContext<ISignupValues>();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <FormControl fullWidth>
            <InputLabel id="position-label111111">Position</InputLabel>
            <Field
              name="position"
              labelId={"position-label111111"}
              // component={CustomizedSelectForFormik}
              as={Select}
              id="position"
              label="Position"
              variant="outlined"
              fullWidth
            >
              {positions.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
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
                {formik.values.timeSlots.map((item, index) => (
                  <Grid item container key={index} spacing={2}>
                    <Grid item xs>
                      <TimePicker
                        label="From"
                        value={item.from}
                        onChange={(val) => {
                          formik.setFieldValue(
                            "timeSlots",
                            formik.values.timeSlots.map((itemJ, indexJ) => {
                              if (index === indexJ) {
                                if (val) {
                                  console.log("val", val);
                                  return {
                                    ...itemJ,
                                    from: new Date(val).getTime(),
                                  };
                                }
                              }
                              return itemJ;
                            })
                          );
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid item xs>
                      <TimePicker
                        label="To"
                        value={item.to}
                        onChange={(val) => {
                          formik.setFieldValue(
                            "timeSlots",
                            formik.values.timeSlots.map((itemJ, indexJ) => {
                              if (index === indexJ) {
                                if (val) {
                                  console.log("val", val);
                                  return {
                                    ...itemJ,
                                    to: new Date(val).getTime(),
                                  };
                                }
                              }
                              return itemJ;
                            })
                          );
                        }}
                        renderInput={(params) => <TextField {...params} />}
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
                    disabled={formik.values.timeSlots.length >= 5}
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
                    disabled={formik.values.timeSlots.length <= 1}
                    onClick={() => {
                      arrayHelpers.remove(formik.values.timeSlots?.length - 1);
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
    </LocalizationProvider>
  );
};

export default ThirdStepUseFormik;
