import { Add, AddPhotoAlternate, Delete } from "@mui/icons-material";
import { Autocomplete, Box, Divider, IconButton, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material"

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
]

const NewOrder = () => {
  return (
    <Box>
      <ListItem
        sx={{ 
          minWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: 3
        }}
        secondaryAction={
          <IconButton
            onClick={() => console.log('Added!')}
          >
            <Add />
          </IconButton>
        }
      >
        <ListItemText primary='Add Custom Item...' />
        <Autocomplete
          sx={{ minWidth: 200, margin: 1 }}
          freeSolo
          options={top100Films.map(film => film.label)}
          renderInput={(params) => <TextField {...params} label="Item Name" InputProps={{
            ...params.InputProps,
            type: 'search',
          }} />}
        />
        <TextField sx={{ minWidth: 200, margin: 1 }} label="Description" />
        <IconButton  >
          <AddPhotoAlternate fontSize="large" color={'primary'} />
        </IconButton>
      </ListItem>

      <Divider />

      <ListItem
        sx={{ minWidth: 400 }}
      >
        <ListItemText primary='Current Order...' />
      </ListItem>
      
      <ListItem
        sx={{ minWidth: 400 }}
        secondaryAction={
          <IconButton
            onClick={() => console.log('deleted')}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemText primary='title' secondary='description' />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem
        sx={{ minWidth: 400 }}
        secondaryAction={
          <IconButton
            onClick={() => console.log('deleted')}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemText primary='title' secondary='description' />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem
        sx={{ minWidth: 400 }}
        secondaryAction={
          <IconButton
            onClick={() => console.log('deleted')}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemText primary='title' secondary='description' />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  )
}

export default NewOrder;