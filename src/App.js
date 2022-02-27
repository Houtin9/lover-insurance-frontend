import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './section/Header'
import Login from './page/Login'
import Register from './page/Register'
import Dashboard from "./page/Dashboard";
import Reward from "./page/Dashboard/reward"
import { ThemeProvider, createTheme } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/claim-reward">
            <Reward />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FF9900",
    }
  },
});

const AppTheme = () => {
  return <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
}

export default AppTheme
