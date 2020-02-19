const db = require('../dbConfig.js');

module.exports = {
  getRecipes,
  findByIdRecipe,
  findByIdIngredient,
  getShoppingList,
  getInstructions,
  addRecipe,
  removeRecipe,
  addIngredient,
  removeIngredient,
  updateRecipe
};

function getRecipes() {
  return db('recipes');
}

function findByIdRecipe(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function findByIdIngredient(id) {
  return db('ingredients')
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db('recipe_ingredients')
  .select('ingredient_name', 'recipe_ingredients.quantity')
  .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
  .where({ recipe_id: id });
}

function getInstructions(id) {
  return db('instructions')
  .select('instructions.step_number', 'instructions.instructions')
  .where({ recipe_id: id });
}

//line 40 was recipe_instructions and 'recipe_' for all of them

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe, 'id')
    .then(ids => {
      const [id] = ids;

      return findByIdRecipe(id).first();
    })
}

function removeRecipe(id) {
  return db('recipes')
    .where({ id })
    .del();
}

function addIngredient(item) {
  return db('ingredients')
    .insert(item, 'id')
    .then(ids => {
      const [id] = ids;

      return findByIdIngredient(id).first();
    })
}

function removeIngredient(id) {
  return db('ingredients')
    .where({ id })
    .del();
}

function updateRecipe(changes, id) {
  return db('recipes')
    .where({ id })
    .update(changes)
    .then(count => {
      if(count > 0) {
        findByIdRecipe()
      } else {
        return null;
      }
    })
}