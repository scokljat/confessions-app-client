import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: "5px",
    margin: "20px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3BEC6",
  },
  heading: {
    color: "#750550",
    fontSize: "40px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column-reverse",
  },
}));
