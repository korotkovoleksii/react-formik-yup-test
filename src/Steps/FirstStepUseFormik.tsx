import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import phoneCodes from '../utils/phoneCodes.json';

const FirstStepUseFormik: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <form
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField name="email" label="Email" variant="outlined" fullWidth />
        </Grid>

        <Grid item>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            type="tel"
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            name="firstName"
            label="First name"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            name="lastName"
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
              value={value}
              onChange={handleChange}
              renderInput={(params: any) => (
                <TextField variant="outlined" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to terms & conditions"
            name="policy"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FirstStepUseFormik;
