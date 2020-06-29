const db = require('../data/config')

module.exports = {
   find,
   findRecipesIngredients,
   findRecipesInstructions,
   findIngredientsRecipe
}


function find() {
    return db('recipes')
  }

function findRecipesIngredients(id) {
    return db('recipes_ingredients as ri')
    .join('recipes as r', 'r.id ', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where('r.id', id)
    .select('r.recipe_name', 'i.name', 'i.quantity')
}  


function findRecipesInstructions(id) {
  return db('instructions as i')
  .join('recipes as r', 'r.id ', 'i.recipe_id')
  .where('r.id', id)
  .select('i.*')
}  

function findIngredientsRecipe(id) {
  return db('recipes_ingredients as ri')
  .join('recipes as r', 'r.id ', 'ri.recipe_id')
  .join('ingredients as i', 'i.id', 'ri.ingredient_id')
  .where('i.id', id)
  .select('r.recipe_name')
} 
// SELECT r.recipe_name
// FROM recipes_ingredients as ri
// JOIN recipes as r on r.id = ri.recipe_id
// JOIN ingredients as i on i.id = ri.ingredient_id
// WHERE i.id = 1