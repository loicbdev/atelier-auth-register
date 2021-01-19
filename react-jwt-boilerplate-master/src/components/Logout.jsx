import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styleFormConnection";

const Logout = () => {
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
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
