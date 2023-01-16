import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {AuthProvider} from './context/AuthContext';
import { SnackbarProvider } from 'notistack'
import {CartProvider} from './context/Context';
import { CustomItemProvider } from "./context/CustomItemContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <SnackbarProvider  anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',}}>
      <AuthProvider>
        <CartProvider>
          <CustomItemProvider>
        <App />
        </CustomItemProvider>
        </CartProvider>
      </AuthProvider>
    </SnackbarProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
