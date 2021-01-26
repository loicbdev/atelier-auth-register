import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <div className="app">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-title">
              <Link to="/" className="navbar-brand">
                My Web App
              </Link>
            </div>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign-up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
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
          </div>
        </div>
      </Router>
    </TokenContextProvider>
  );
}

export default App;
