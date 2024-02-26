import { Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeItem from "../../components/recipe-item";

export default function Recipes() {
    
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = () => {
    //prepare url
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append('apiKey', 'ae86e0958cd14bc1b757294d0e92a01d')
    //fetch recipes
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //update recipes state
        // console.log({ data });
        setRecipes(data.results)
      })
      .catch((error) => console.log(error));
  };

  useEffect(searchRecipes, []);

  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
      </Grid>
    </Container>
  );
}