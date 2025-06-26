const express = require('express');
const router = express.Router();
const controller = require('../controllers/Post.Controller');

router.get('/posts', controller.getPosts);
router.post('/posts', controller.createPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);

module.exports = router;
