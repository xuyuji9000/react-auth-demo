import React from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import App from "./components/App";
import Authorization from "./authorization";


// Router configuration
const routes = (
    <Route path="/" component={App}>
      <Route
        path="feature"
        component={Authorization(['manager', 'admin'])(Home)}
      />
    </Route>
);

export default routes;
