import { Container, Grid, Card, CardMedia, TextField, CardContent,Typography } from '@mui/material'
import React from 'react'

export default function Recipes () {
  return (
    <Container sx={{ my: '2rem'}} maxWidth="sm">
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />

        <Grid sx={{ mt: '1rem'}} container spacing={3} >
            <Grid item xs={4}>
                <Card>
                    <CardMedia
                    sx={{height: 140}}
                    image='https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Card>
                <CardContent>
                <Typography variant="h5">
                    Recipe Name
                </Typography>
            </CardContent>
            </Grid>
            

        </Grid>
    </Container>
  )
}
