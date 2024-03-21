import { Container, Grid, TextField } from '@mui/material'
import React from 'react'

export const AddRecipe = () => {
  return (
    <>
      <Container style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
 <TextField
    id="outlined-basic"
    label="Search"
    variant="outlined"
  />

</Container>

    </>
  )
}
