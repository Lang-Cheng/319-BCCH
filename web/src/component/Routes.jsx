import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import components
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Upload } from "./upload_component/Upload";

export function Routes(props) {
  return (
    <Switch>
      <Route path="/login">
        {props.isLoggedIn ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login
            setIsLoggedIn={props.setIsLoggedIn}
            setIsAdmin={props.setIsAdmin}
            setCookie={props.setCookie}
          />
        )}
      </Route>
      {props.isLoggedIn ? (
        <ProtectedRoutes {...props} />
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  );
}

function ProtectedRoutes(props) {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard {...props} />
      </Route>
      <Route path="/upload/:type">
        <Upload />
      </Route>
    </Switch>
  );
}