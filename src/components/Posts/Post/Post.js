import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { Button, Card, Typography } from "@material-ui/core";
import ThumUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";

import { deletePost, likePost, unlikePost } from "../../../actions/posts";

import useStyles from "./styles";

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.creator}>
        {post.creator}
      </Typography>
      <Typography variant="body2" className={classes.time}>
        {format(new Date(post.createdAt), `hh:mm:ss a`)}
      </Typography>
      <Typography className={classes.description}>
        {post.description}
      </Typography>
      <div>
        <Button
          className={classes.buttons}
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumUpAltIcon fontSize="small" />
          {post.likeCount} Like
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => dispatch(unlikePost(post._id))}
        >
          <ThumbDownAltIcon fontSize="small" />
          {post.unlikeCount} Unlike
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </div>
    </Card>
  );
}
export default Post;
