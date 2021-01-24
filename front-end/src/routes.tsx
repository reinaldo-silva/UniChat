import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAcount from "./pages/CreateAcount";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/create-acount" component={CreateAcount} />

      {/* <Route path="/" component={() => <h1>404 - Page not found</h1>} /> */}
    </BrowserRouter>
  );
}
