import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CheckoutPage from "./components/CheckoutPage";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Redirect from="/" to="/main" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
