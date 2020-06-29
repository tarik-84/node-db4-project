
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {name: 'corn flour', quantity: '1 cup'},
    {name: 'butter', quantity: '2 spoons'},
    {name: 'whole milk', quantity: '1 cup'},
    {name: 'suger', quantity: '1/2 cup'},
    {name: 'salt', quantity: '1 spoon'},
  ])
};
