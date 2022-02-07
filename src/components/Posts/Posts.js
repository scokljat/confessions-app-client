import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";
function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </div>
  );
}

export default Posts;
