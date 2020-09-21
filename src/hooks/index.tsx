import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import DateUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider as MaterialProvider } from '@material-ui/styles';
import pt from 'date-fns/locale/pt';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from '~/store';
import { theme, materialUI } from '~/styles';

import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MaterialProvider theme={materialUI}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateUtils} locale={pt}>
            <ToastProvider>{children}</ToastProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MaterialProvider>
    </PersistGate>
  </Provider>
);

export default AppProvider;
