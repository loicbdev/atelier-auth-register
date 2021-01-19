import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  someInput: {
    margin: "5px 0",
    textAlign: "left",
    backgroundColor: theme.palette.common.white,
    paddingBottom: "1.5rem",
  },
  list: {
    margin: "7px 0",
    textAlign: "center",
    fontSize: "1.2rem",
  },
}));

export default useStyles;
