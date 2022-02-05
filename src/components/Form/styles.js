import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#E3BEC6",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#750550",
    margin: "10px",
    height: "50px",
  },
}));
