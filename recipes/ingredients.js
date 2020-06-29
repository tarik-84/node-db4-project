const express = require('express')
const recipes = require('./recipes-model')


const router = express.Router()



router.get('/:id/recipes', async (req, res, next) => {
    try {
       const ingred = await recipes.findIngredientsRecipe(req.params.id)
         res.status(200).json(ingred) 
    }catch(err) {
        next(err)
    }  
 })



 module.exports = router