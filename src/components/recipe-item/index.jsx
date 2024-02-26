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
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image= {image}
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
