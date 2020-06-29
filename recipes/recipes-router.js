const express = require('express')
const recipes = require('./recipes-model')


const router = express.Router()


router.get('/', async (req, res, next) => {
   try {
      const recipes = await recipes.find()
        res.status(200).json(recipes) 
   }catch(err) {
       next(err)
   }
})

router.get('/:id', async (req, res, next) => {
   try {
      const recipe = await recipes.findRecipesIngredients(req.params.id)
        res.status(200).json(recipe) 
   }catch(err) {
       next(err)
   }
})

router.get('/:id/instructions', async (req, res, next) => {
   try {
      const recipe = await recipes.findRecipesInstructions(req.params.id)
        res.status(200).json(recipe) 
   }catch(err) {
       next(err)
   }  
})




module.exports = router