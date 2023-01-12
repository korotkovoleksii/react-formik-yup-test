import React from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const positions = [
  'Developer',
  'Designer',
  'Quality assurance',
  'Business Analyst',
  'Human Resources',
];

const ThirdStepUseFormik: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(Date.now());
  return (
    <form
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              name="position"
              label="Position"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h6" mb={2}>
                Time slots you're available
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs>
                <TimePicker
                  label="From"
                  value={value}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs>
                <TimePicker
                  label="To"
                  value={value}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item>
                <IconButton aria-label="add" color="success" size="large">
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="delete" color="error" size="large">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </form>
  );
};

export default ThirdStepUseFormik;
