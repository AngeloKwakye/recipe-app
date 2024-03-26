import { Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeItem from "../../components/recipe-item";
import notfound from "../../assets/images/undraw_no_data_re_kwbl.svg";
import spinner from "../../assets/images/infinite-spinner.svg";
import NavBar from "../../components/navbar";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, getRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const searchRecipes = () => {
    setLoading(true);
    //prepare url
    const url = new URL(`${process.env.REACT_APP_RECIPE_API_KEY}/recipes`);
    // const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    // url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // url.searchParams.append('query',query)
    //fetch recipes
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //update recipes state
        // console.log({ data });
        setRecipes(data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(searchRecipes, [query]);

  return (
    <>
      <NavBar />

      <Container sx={{ my: "2rem" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onKeyDown={(event) =>
            event.key === "Enter" && getRecipe(event.target.value)
          }
        />

        <Grid sx={{ mt: "1rem" }} container spacing={3}>
          {loading ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <img width="30%" src={spinner} />{" "}
            </Container>
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeItem
                key={recipe._id}
                title={recipe.title}
                image={recipe.image}
                id={recipe._id}
              />
            ))
          ) : (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <img src={notfound} width="30%" />
            </Container>
          )}
        </Grid>
      </Container>
    </>
  );
}
