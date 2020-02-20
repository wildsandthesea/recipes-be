
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_number: 1,
          instructions: 'In a large bowl, whisk together the flour, baking soda, cinnamon, and salt. Set aside.',
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions: 'In the bowl of a stand mixer fitted with the paddle attachment (or in a large mixing bowl using a handheld mixer), beat the butter, brown sugar, and granulated sugar until smooth. Mix in the egg and then the vanilla, scraping down the sides of the bowl as needed.',
          recipe_id: 1
        },
        {
          step_number: 3,
          instructions: 'Slowly add the flour mixture to the wet ingredients and mix until just combined. Add the oats, dried cranberries, and white chocolate chips and mix until fully combined.',
          recipe_id: 1
        },
        {
          step_number: 4,
          instructions: 'Cover the dough and refrigerate for at least 30 minutes.',
          recipe_id: 1
        },
        {
          step_number: 5,
          instructions: 'Preheat oven to 350°F. Line two large baking sheets with parchment paper and set aside.',
          recipe_id: 1
        },
        {
          step_number: 6,
          instructions: 'Using a 1.5-2 tablespoon cookie scoop, scoop the cookie dough and drop onto the prepared baking sheets. Roll the cookie dough into balls and very gently press down with your hand to flatten each ball of cookie dough slightly (make sure not to flatten them completely, just slightly).',
          recipe_id: 1
        },
        {
          step_number: 7,
          instructions: 'Bake in separate batches at 350°F for 10-13 minutes. Remove from the oven and allow to cool on the baking sheet for 5-10 minutes, then transfer to a wire rack to finish cooling.',
          recipe_id: 1
        },
      ]);
    });
};
