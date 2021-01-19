/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styleFormSubscribe";

const Register = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
//  const [result, setResult] = useState({ message: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//    signUp(state, setResult, setState);
  };

  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        id="firstname"
        name="firstName"
        label="Prénom"
        className={classes.someInput}
        value={state.firstName}
        onChange={handleChange}
        multiline
      />
      <TextField
        id="lastname"
        name="lastName"
        label="Nom"
        className={classes.someInput}
        value={state.lastName}
        onChange={handleChange}
        multiline
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        className={classes.someInput}
        value={state.email}
        onChange={handleChange}
        autoComplete="email"
        autoFocus
      />

      <TextField
        id="password"
        name="password"
        label="Mot de passe"
        type="password"
        autoComplete="current-password"
        className={classes.someInput}
        value={state.password}
        onChange={handleChange}
      />

      <TextField
        id="passwordVerification"
        name="passwordConfirmation"
        label="confirmer le mot de passe"
        type="password"
        autoComplete="current-password"
        className={classes.someInput}
        value={state.passwordConfirmation}
        onChange={handleChange}
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
