import * as React from 'react';
import StepperComponent from './Steps';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Grid, Paper, Stack, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import Box from '@mui/system/Box';

const CustomContainer = styled(Box)(() => ({
  flexGrow: 1,
  overflow: 'hidden',
  px: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomContainer>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Paper
            elevation={0}
            variant="outlined"
            style={{
              padding: 24,
              width: 500,
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h4">Sign up</Typography>
              <StepperComponent />
            </Stack>
          </Paper>
        </Grid>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
