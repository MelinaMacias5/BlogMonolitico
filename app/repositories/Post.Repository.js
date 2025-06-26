const pool = require('../../config/db');

// Obtener todos los posts
const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
  return result.rows;
};

// Crear post
const createPost = async ({ title, content }) => {
  const result = await pool.query(
    `INSERT INTO posts (title, content, created_at, updated_at) 
     VALUES ($1, $2, NOW(), NOW()) RETURNING *`,
    [title, content]
  );
  return result.rows[0];
};

// Actualizar post
const updatePost = async (id, { title, content }) => {
  const result = await pool.query(
    `UPDATE posts 
     SET title = $1, content = $2, updated_at = NOW() 
     WHERE id = $3 RETURNING *`,
    [title, content, id]
  );
  return result.rows[0];
};

// Eliminar post
const deletePost = async (id) => {
  await pool.query(`DELETE FROM posts WHERE id = $1`, [id]);
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
