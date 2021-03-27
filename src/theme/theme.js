import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    // primary: {
    //  main: '#556cd6',
    // },
    // secondary: {
    // main: '#19857b',
    // },
    // error: {
    //  main: red.A400,
    // },
    background: {
     default: '#E1E1E1',
     light: '#E9E9E9',
    },
    shadow: {
      header: '#82828266',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1300,
      xl: 1600,
      // xxl: 1500,
      // mg: 1920
    },
  },
});

export default theme;