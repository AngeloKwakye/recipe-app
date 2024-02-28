import React from 'react'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";


export default function RecipeItem({image, title}) {
  return (
    <>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardMedia
              component="img"
              alt={title}
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    </>
  )
}
