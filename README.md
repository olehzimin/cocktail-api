# Cocktail API


## Overview

The Cocktails API is a backend service made for a portfolio cocktails application. It provides structured and searchable access to cocktail recipes and ingredient data, designed primarily for educational use only.

> **Disclaimer:** This project compiles International Bartenders Association's (IBA) [official
cocktail recipes](http://iba-world.com/iba-cocktails/) into API project for educational purposes only. This project is non-commercial and intended solely for use as part of a personal portfolio. This API cannot be used for commercial purposes.

## Core Features

- **List All Recipes**  
  Retrieve a list of all available recipes in the database. `> GET /api/recipes`

- **Cocktail Search by Name**  
  Retrieve a full recipe, including ingredients and instructions. `> GET /api/recipes?name=spritz`

- **Cocktail Search by Ingredient**  
  Retrieve a full recipe, including ingredients and instructions. `> GET /api/recipes?ingredient=vodka`

- **List All Ingredients**  
  Retrieve a list of all available ingredients in the database. `> GET /api/ingredients`

- **Ingredient Search by Name**  
  Retrieve an ingredient info. `> GET /api/ingredients?name=vodka`
