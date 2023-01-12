import React from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const SecondStepUseFormik: React.FC = () => {
  return (
    <form
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            name="confirm-password"
            label="Confirm password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SecondStepUseFormik;
