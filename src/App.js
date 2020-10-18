import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import history from "./utilities/History";
import Mymodal from "./components/portal";
import {
  Login,
  Navbar,
  Attendance,
  BreadCrumbs,
  Employees,
  Home,
  MyAlert,
  PrivateRouter,
  Profile,
  Requests,
  Resignation,
  SelectedUser,
  ShowComponent,
  SideBar,
  Vacation,
  reducers,
  ResetPassword,
  Notifications,
} from "./components";
const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Cairo"',
    fontSize: 15,
    lineHeight: 1.5,
    letterSpacing: 0.32,
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    h6: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <MyAlert />
        <Mymodal />
        <div className="App">
          <ShowComponent Component={<Navbar />} />
          <ShowComponent Component={<SideBar />} />
          <ShowComponent Component={<BreadCrumbs />} />
          <Router history={history}>
            <Route path="/" exact component={Login} />
            <Route path="/resetPassword" exact component={ResetPassword} />
            <Route path="/home" exact component={Home} />
            <Route path="/afterLogin" exact component={SelectedUser} />
            <Route path="/employees" exact component={Employees} />
            <Route path="/attendance" exact component={Attendance} />
            <Route path="/requests" exact component={Requests} />
            <Route path="/vacation" exact component={Vacation} />
            <Route path="/resignation" exact component={Resignation} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/notifications" exact component={Notifications} />
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
