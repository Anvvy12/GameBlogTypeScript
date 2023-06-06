import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#262624',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const responsiveTheme: Theme = responsiveFontSizes(theme);

export default responsiveTheme;
