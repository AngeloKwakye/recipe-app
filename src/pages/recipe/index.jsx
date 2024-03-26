import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../assets/images/infinite-spinner.svg";
import Navbar from "../../components/navbar";

const getRecipe = (...args) => {
    // Prepare URL
    const url = new URL(...args);
    // url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // Fetch and return data

    return fetch(url).then(response => response.json())
}

export default function Recipe() {
    const { id } = useParams();

    const {data : recipe, isLoading } = useSWR(`http://localhost:4000/recipes/${id}`, getRecipe);

    console.log(recipe, isLoading);
    


    return (
        <>
        <Navbar/>
        {isLoading?<img src={spinner}/> : (
            <Container>
            <h1>  {recipe.data.title} </h1>
            {/* <p>{recipe.summary}</p> */}
            <div dangerouslySetInnerHTML={{__html:recipe.data.summary}}></div>
            <img src={recipe.data.image}></img>
            </Container>
        )}
        </>
    );
}