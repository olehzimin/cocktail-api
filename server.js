const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf-8'));
const ingredients = JSON.parse(fs.readFileSync('ingredients.json', 'utf-8'));

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
        // Check if ingredient exists before calling .toLowerCase()
        ing.name && ing.name.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
  }

  // If no results found, send a 404
  if (results.length === 0) {
    return res.status(404).json({ error: "No matching recipes found" });
  }

  res.json(results);
});

app.get('/ingredients', (req, res) => {
  const { name } = req.query;

  let results = ingredients;

  // Filter by ingredient name (if provided)
  if (name) {
    results = Object.entries(ingredients).filter(([key]) =>
      key.toLowerCase().includes(name.toLowerCase())
    );

    // Convert array of entries back to an object
    results = Object.fromEntries(results);
  }

  // If no results found, send a 404
  if (results.length === 0) {
    return res.status(404).json({ error: "No matching ingredient found" });
  }

  res.json(results);
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
