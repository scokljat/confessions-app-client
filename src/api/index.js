import axios from "axios";

const url = "http://localhost:5000/posts";
console.log(`${process.env.REACT_APP_API_URL}`);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const unlikePost = (id) => axios.patch(`${url}/${id}/unlikePost`);
