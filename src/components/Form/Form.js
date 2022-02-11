import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { createPost } from "../../actions/posts";

import useStyles from "./styles";

const validationSchema = Yup.object().shape({
  creator: Yup.string()
    .required("Creator is required")
    .min(3, "Creator must be at least 3 charachters")
    .max(10, "Creator must not exceed 10 characters"),
  description: Yup.string()
    .required("Confession is required")
    .min(5, "Confession must be at least 5 charachters")
    .max(20, "Confession must not exceed 20 characters"),
});

function Form() {
  const [postData, setPostData] = useState({
    description: " ",
    creator: " ",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const clear = () => {
    setPostData({
      description: " ",
      creator: " ",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit((e) => {
          dispatch(createPost(postData));
          clear();
        })}
      >
        <TextField
          style={{ padding: "5px" }}
          required
          {...register("creator")}
          error={errors.creator ? true : false}
          variant="outlined"
          label="Creator"
          type="text"
          name="creator"
          id="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />{" "}
        <Typography variant="inherit" color="textSecondary">
          {errors.creator?.message}
        </Typography>
        <TextField
          style={{ padding: "5px" }}
          required
          {...register("description")}
          error={errors.description ? true : false}
          variant="outlined"
          label="Write your confession..."
          type="text"
          name="description"
          id="description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.description?.message}
        </Typography>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Admit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Form;
