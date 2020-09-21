import { createMuiTheme } from '@material-ui/core/styles';
import { shade, lighten } from 'polished';

import colors from './colors';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: colors.primary,
      light: lighten(0.3, colors.primary),
      dark: shade(0.3, colors.primary),
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      light: lighten(0.3, colors.secondary),
      dark: shade(0.3, colors.secondary),
      contrastText: colors.white,
    },
    error: {
      main: colors.midRed,
      light: colors.lightRed,
      dark: colors.darkRed,
    },
    warning: {
      main: colors.midOrange,
      light: colors.lightOrange,
      dark: colors.darkOrange,
    },
    success: {
      main: colors.midGreen,
      light: colors.lightGreen,
      dark: colors.darkGreen,
    },
  },
});

export default theme;
