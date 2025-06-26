const service = require('../services/Post.Service');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getPosts = async (req, res) => {
  try {
    const posts = await service.fetchAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener posts', error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await service.createNewPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear post', error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updated = await service.updateExistingPost(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar post', error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    await service.deleteExistingPost(req.params.id);
    res.json({ message: 'Post eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar post', error: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
