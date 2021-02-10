import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x

import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./reducers";

const theme = createMuiTheme({
  /* theme for v1.x */
 });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
