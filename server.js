const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf-8'));

app.get('/recipes', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = recipes.filter(r =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(recipes);
  }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));