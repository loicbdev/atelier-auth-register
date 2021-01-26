/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { TokenContext } from "../contexts/TokenContext";
import useStyles from "./styleRegister";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { token, setToken } = useContext(TokenContext);

  useEffect(() => {
    if (token) {
      // user already logged
      history.push("/login");
    }
  }, []);

  const handleSubmit = () => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (firstname && lastname && email && password) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/register/`, {
          firstname,
          lastname,
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.token);
          localStorage.setItem("TOKEN", data.token); // (attention!!!)
          history.push("/login");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert("Please specify both firstname, lastname, email and password");
    }
  };

  const classes = useStyles();


  return (
    <form className={classes.form} noValidate>
      <TextField
        id="firstname"
        name="firstname"
        label="Prénom"
        variant="outlined"
        margin="normal"
        className={classes.someInput}
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)} 
        multiline
      />
      <TextField
        id="lastname"
        name="lastname"
        label="Nom"
        variant="outlined"
        margin="normal"
        className={classes.someInput}
        value={lastname}
        onChange={(e) => setLastName(e.target.value)} 
        multiline
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        className={classes.someInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        autoComplete="email"
        autoFocus
      />

      <TextField
        id="password"
        name="password"
        label="Mot de passe"
        variant="outlined"
        margin="normal"
        type="password"
        autoComplete="current-password"
        className={classes.someInput}
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button
        variant="contained"
        color="primary"
        margin="normal"
        onClick={handleSubmit}
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
