
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'all-purpose flour'},
        {name: 'baking soda'},
        {name: 'ground cinnamon'},
        {name: 'salt'},
        {name: 'unsalted butter'},
        {name: 'light brown sugar'},
        {name: 'granulated sugar'},
        {name: 'egg'},
        {name: 'vanilla extract'},
        {name: 'old-fashioned rolled oats'},
        {name: 'sweetened dried cranberries'},
        {name: 'white chocolate chips'}
      ]);
    });
};
