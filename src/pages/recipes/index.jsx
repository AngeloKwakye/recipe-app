import { Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeItem from "../../components/recipe-item";

export default function Recipes() {
    
  const [recipes, setRecipes] = useState([]);
  const [recipe, getRecipe] = useState("");

  const searchRecipes = () => {
    //prepare url
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY)
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

  const searchRecipe = () => {
    //prepare url
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY)
    url.searchParams.append('query', recipe);
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
        label="Search"
        variant="outlined"
        onKeyDown={event => event.key == "Enter" && searchRecipe()}
        onChange={event => getRecipe(event.target.value)}
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
      </Grid>
    </Container>
  );
}