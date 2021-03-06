import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5rem",
  },
  someInput: {
    margin: "2px 0",
    textAlign: "left",
    backgroundColor: theme.palette.common.white,
    paddingBottom: "1.5rem",
  },
}));

export default useStyles;
