import { createTheme } from '@mui/material/styles';

export const theme = createTheme({ 
  palette: {
    primary: {
      main: '#c99f58',
      contrastText: 'rgba(12,10,10,0.87)',
    },
    secondary: {
      main: '#f2f2f2',
    },
    background: {
      default: '#201d1d',
      paper: '#414146',
    },
    divider: 'rgba(243,239,239,0.12)',
    text: {
      primary: 'rgba(239,232,232,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
      disabled: 'rgba(181,119,119,0.38)',
    },
  },
});