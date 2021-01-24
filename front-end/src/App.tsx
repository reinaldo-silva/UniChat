import React from "react";
import { Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import history from "./services/history";
import api from "./services/api";
import GlobalStyles from "./assets/styles/global";
import Routes from "./routes";

function App() {
  return (
    <ApolloProvider client={api}>
      <Router history={history as any}>
        <Routes />
        <GlobalStyles />
      </Router>
    </ApolloProvider>
  );
}

export default App;
