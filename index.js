const express = require('express');
const app = express();
const postRoutes = require('./app/routes/post.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API funcionando. Usa /api/posts');
});
