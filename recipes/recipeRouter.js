const express = require('express');

const Recipes = require('./recipeModel.js');

const router = express.Router();

//gets all recipes
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Failed to retrieve recipes', error })
    })
})

//gets recipes by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Recipes.findByIdRecipe(id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Unable to retrieve recipes by id', error })
    })
})

//adds a new recipe
router.post('/:id', (req, res) => {
  const { id } = req.params;
  Recipes.addRecipe(id)
    .then(added => {
      res.status(201).json(added)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Unable to add recipe to the database', error })
    })
})

module.exports = router;