const express = require('express');

const RecipeRouter = require('../recipes/recipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Backend 🤘🏼💀✨'})
})

module.exports = server;