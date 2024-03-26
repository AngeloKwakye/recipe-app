import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function NavBar (){
  // const navigate = useNavigate();

  return (
   <>
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to={'/'} color='inherit' sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
          <Button variant="text"> <Link style={{textDecoration: 'none', color: 'white'}} to={'/add-recipe'}> ADD A NEW RECIPE</Link></Button>
        </Toolbar>
      </AppBar>
   </>
  )
}
