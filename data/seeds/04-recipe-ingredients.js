
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 1,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 0.5,
          measurement: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 0.5,
          measurement: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: 0.25,
          measurement: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: 0.5,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          quantity: 0.5,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
          quantity: 0.25,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 8,
          quantity: 1,
          measurement: 'large'
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          quantity: 1,
          measurement: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 10,
          quantity: 1.5,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 11,
          quantity: 0.75,
          measurement: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 12,
          quantity: 0.75,
          measurement: 'cup'
        },
      ]);
    });
};
