import { Box, List, ListItemButton, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";


const nav = ['account', 'orders', 'favourites', 'categories', 'products', 'cart']

const Sidebar = () =>
    <Box
        sx={{ marginTop: 10 }}
    >
        <List>
            {nav.map(page => 
                <ListItem>
                    <ListItemButton
                        to={`/${page}`}
                        component={Link}
                    >
                        <ListItemText primary={page.toUpperCase()} />
                    </ListItemButton>
                </ListItem>  
            )}
        </List>

    </Box>

export default Sidebar;
