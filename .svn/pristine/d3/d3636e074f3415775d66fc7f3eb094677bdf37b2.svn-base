import React from "react";
import { Route, Redirect } from "react-router-dom";
import Axios from "../../API/api";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Axios.defaults.headers.token !== undefined ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
