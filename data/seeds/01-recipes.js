
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Soft and Chewy Oatmeal Cookies',
          description: 'Easy soft and chewy oatmeal cookies packed with white chocolate chips and dried cranberries. These cookies are perfect for the holidays, or anytime you need something sweet.'
        },
      ]);
    });
};
