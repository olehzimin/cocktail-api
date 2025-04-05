const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf-8'));

app.get('/recipes', (req, res) => {
  const { name, ingredient } = req.query;

  let results = recipes;

  // Filter by cocktail name (if provided)
  if (name) {
    results = results.filter(recipe =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter by ingredient name (if provided)
  if (ingredient) {
    results = results.filter(recipe =>
      recipe.ingredients.some(ing =>
        ing.ingredient && ing.ingredient.toLowerCase().includes(ingredient.toLowerCase()) // Check if ingredient exists before calling .toLowerCase()
      )
    );
  }

  // If no results found, send a 404
  if (results.length === 0) {
    return res.status(404).json({ error: "No matching recipes found" });
  }

  res.json(results);
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
