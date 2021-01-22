import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />

        {/* <Route path="/" component={() => <h1>404 - Page not found</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
