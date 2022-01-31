import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "15px",
    margin: "10px",
    height: "100%",
    position: "relative",
    backgroundColor: "#FFD39A",
    padding: "10px",
  },
  creator: {
    color: "#750550",
    fontWeight: "bold",
    fontSize: "15px",
  },
  time: {
    color: "#750550",
    fontSize: "12px",
  },
  description: {
    color: "#4C0027",
    fontSize: "25px",
  },
  buttons: {
    color: "#750550",
  },
});
