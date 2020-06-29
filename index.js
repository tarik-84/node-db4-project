const express = require('express');
const recipesRouter = require('./recipes/recipes-router');
const ingredientsRouter = require('./recipes/ingredients')

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });