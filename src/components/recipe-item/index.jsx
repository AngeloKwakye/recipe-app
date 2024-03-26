import React from 'react'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";
import { Link } from 'react-router-dom';


export default function RecipeItem({image, title, id}) {
  return (
    <>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardMedia
            sx={{ height: 140 }}
              component="img"
              image={`${process.env.REACT_APP_RECIPE_API_KEY}/images/${image}`}
              title={title}
            />
            <CardContent>
             <Link to={`/recipes/${id}`}>
             <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
             </Link>
            </CardContent>
          </Card>
        </Grid>
    </>
  )
}
