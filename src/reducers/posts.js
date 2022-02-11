import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../constants/actionTypes";

const reducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
export default reducers;
