import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/logout">Disconnect</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
