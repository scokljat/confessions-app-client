import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography } from "@material-ui/core";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { getPosts } from "./actions/posts";

import useStyles from "./styles";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading}>Confessions</Typography>
      </AppBar>
      <Container className={classes.mainContainer}>
        <Posts />
        <Form setCurrentId={setCurrentId} />
      </Container>
    </Container>
  );
}

export default App;
