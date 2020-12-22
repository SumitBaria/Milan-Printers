import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/helper/PrivateRoute";

import Home from "./core/Home";
import Product from "./core/Product";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard/" exact component={UserDashboard} />
        <PrivateRoute path="/user/product/" exact component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
