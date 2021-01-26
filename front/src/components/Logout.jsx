import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { TokenContext } from "../contexts/TokenContext";
import useStyles from "./styleLogin";

const Logout = () => {
  const { setToken } = useContext(TokenContext);
  const history = useHistory();

  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    setToken(null);
    history.push("/login");
    alert("Disconnected successfully");
  };

  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Button
        variant="contained"
        color="primary"
        margin="normal"
        onClick={handleSubmit}
      >
        Disconnect
      </Button>
    </form>
  );
};

export default Logout;
