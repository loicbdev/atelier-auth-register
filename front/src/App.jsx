import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import TokenContextProvider from "./contexts/TokenContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/commons/Footer/Footer";
// import "./App.css";

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
