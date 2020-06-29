
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increments('id')
      table.text('recipe_name').notNull()
  })

  await knex.schema.createTable('ingredients', (table) => {
      table.increments('id')
      table.text('name').notNull()
      table.text('quantity').notNull()
  })

  await knex.schema.createTable('instructions', (table) => {
      table.increments('id')
      table.text('step_number')
      table.text('description')
      table.integer('recipe_id')
           .references('id')
           .inTable('recipes')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
  })

  await knex.schema.createTable('recipes_ingredients', (table) => {
      table.integer('recipe_id')
           .references('id')
           .inTable('recipes')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
      
      table.integer('ingredient_id')
           .references('id')
           .inTable('ingredients')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
     
      table.primary(['recipe_id', 'ingredient_id'])          
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('instructions')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipes')
};
