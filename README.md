# Cocktail API


## Overview

The Cocktails API is a backend service made for a portfolio cocktails application. It provides structured and searchable access to cocktail recipes and ingredient data, designed primarily for educational use only. This project compiles International Bartenders Association's (IBA) [official
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


## Disclaimer

This project is intended solely for educational and research purposes.

It may include data or references to materials sourced from third-party websites where ***all rights are reserved*** by their respective owners. I ***do not claim any ownership*** over this third-party content.

All third-party trademarks, logos, and copyrighted materials are the property of their respective owners. This project ***does not distribute or republish*** the original content in any form. The use of any such content is purely for ***non-commercial, educational use only***, such as demonstrating API development and data processing techniques. If you are a rights holder and have any concerns, please contact me for prompt removal.
