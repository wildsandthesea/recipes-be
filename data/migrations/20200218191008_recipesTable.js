
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl.string('name', 128).notNullable();
    tbl.string('description', 512).notNullable();
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.integer('step_number').notNullable();
    tbl.string('instructions').notNullable();
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.primary(['recipe_id', 'ingredient_id']);
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    tbl.float('quantity').notNullable();
    tbl.string('measurement').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
