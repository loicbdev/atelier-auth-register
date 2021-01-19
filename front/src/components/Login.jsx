import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styleFormConnection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          localStorage.setItem("TOKEN", data.token); // (attention!!!)
          alert("Logged successfully"); // (attention!!!)
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
