
exports.seed =async function(knex) {
  await knex('instructions').insert([
    {step_number: '1', description:'Mix all ingredients', recipe_id: 1},
    {step_number: '2', description:'Make it rounded', recipe_id: 1},
    {step_number: '3', description:'Fry it', recipe_id: 1},
    {step_number: '1', description:'Mix all ingredients', recipe_id: 2},
    {step_number: '2', description:'scoop the mix into cupcake paper and bake it', recipe_id: 2},
    {step_number: '3', description:' bake it', recipe_id: 2}
  ])
};
