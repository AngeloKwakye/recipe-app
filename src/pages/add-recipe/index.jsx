import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Autocomplete,
  Box,
  Collapse,
  Container,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import { countries } from "../../countries";

export const AddRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('New Recipe added successfully!');

  const addRecipe = async (event) => {
    setLoading(true);
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Post form data to the backend
    const dataValue = await fetch(
      `${process.env.REACT_APP_RECIPE_API_KEY}/recipes`,
      {
        method: "POST",
        body: formData,
      }
    );

    if(dataValue.status !== 201){
        setMessage('Failed to add Recipe!')
    }

    if (dataValue.status === 201) {
      const data = await dataValue.json();
      console.log(data);
      setOpen(true);
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <Container sx={{ my: "2rem" }} maxWidth="sm">
        <h1>Add A New Recipe</h1>
        <form onSubmit={addRecipe}>
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="title"
            label="Recipe Title"
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="description"
            label="Recipe Description"
            multiline
            rows={4}
          />
          <TextField
            sx={{ mb: "2rem" }}
            InputLabelProps={{
              shrink: true,
            }}
            type="file"
            fullWidth
            name="image"
            label="Recipe Image"
          />
          <Autocomplete
            sx={{ mb: "2rem" }}
            id={countries.code}
            name="country"
            options={countries}
            disableCloseOnSelect
            getOptionLabel={(option) =>
              `${option.label} (${option.code}) +${option.phone}`
            }
            renderInput={(params) => (
              <TextField {...params} label="Choose a country" />
            )}
          />
          <Box textAlign="center">
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {message}
              </Alert>
            </Collapse>

            <LoadingButton
              sx={{ width: "50%" }}
              loading={loading}
              type="submit"
              size="large"
              variant="contained"
            >
              Add New Recipe
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </>
  );
};
