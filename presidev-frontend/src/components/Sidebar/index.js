import { Box, List, ListItemButton, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import { useContext } from "react";



const Sidebar = () => {
    let { user } = useContext(AuthContext);
    
    const userType = user.profile.organisation.organisation_type.name
    
    const nav = {
        'End User': ['account', 'orders', 'favourites', 'categories', 'products', 'cart'],
        'Operational Hub': ['account', 'orders'],
        'Supplier': ['account', 'orders']
    }

    return (

        <Box
            sx={{ marginTop: 10 }}
        >
            <List>
                {nav[userType].map(page =>
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

    )
}

export default Sidebar;
