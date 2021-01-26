import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { TokenContext } from "../contexts/TokenContext";
import useStyles from "./styleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      // user already logged
      history.push("/articles");
    }
  }, []);

  const handleSubmit = () => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (email && password) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/login/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.token);
          localStorage.setItem("TOKEN", data.token); // (attention!!!)
          history.push("/articles");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert("Please specify both email and password");
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="email"
        type="email"
        label="Email"
        className={classes.someInput}
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)} // (attention!!!)
      />
      <TextField
        name="password"
        id="password"
        type="password"
        placeholder="***********"
        variant="outlined"
        required
        label="Mot de passe"
        className={classes.someInput}
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // (attention!!!)
      />
      <Button
        variant="contained"
        color="primary"
        margin="normal"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
