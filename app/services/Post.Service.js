const repository = require('../repositories/Post.Repository');

const fetchAllPosts = () => repository.getAllPosts();
const createNewPost = (data) => repository.createPost(data);
const updateExistingPost = (id, data) => repository.updatePost(id, data);
const deleteExistingPost = (id) => repository.deletePost(id);

module.exports = {
  fetchAllPosts,
  createNewPost,
  updateExistingPost,
  deleteExistingPost,
};
