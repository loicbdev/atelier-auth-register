import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import TokenContextProvider from "./contexts/TokenContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/commons/Footer/Footer";
import "./App.css";
import Articles from "./components/Articles";

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/articles">
            <Articles />
          </PrivateRoute>
          <PrivateRoute exact path="/users">
            <Users />
          </PrivateRoute>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </TokenContextProvider>
  );
}

export default App;
