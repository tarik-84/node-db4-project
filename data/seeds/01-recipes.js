
exports.seed = async function(knex) {
  await knex('recipes').insert([
    {recipe_name: 'donut'},
    {recipe_name: 'cupcack'}
  ])
};
