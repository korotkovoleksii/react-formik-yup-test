import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#784af4',
    },
    secondary: {
      main: '#a05c7b',
    },
    background: {
      default: '#f2e9e4',
      paper: '#fcfaf9',
    },
    error: {
      main: '#d87070',
    },
    success: {
      main: '#80dca3',
    },
    text: {
      primary: 'rgba(34,34,59,0.9)',
      secondary: 'rgba(34,34,59,0.5)',
      disabled: 'rgba(34,34,59,0.4)',
    },
  },
});
