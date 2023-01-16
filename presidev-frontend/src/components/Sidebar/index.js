import { Box, List, ListItemButton, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import { useContext, useState } from "react";


const nav = {
  'End User': ['account', 'orders', 'favourites', 'categories', 'products', 'cart'],
  'Operational Hub': ['account', 'orders'],
  'Supplier': ['account', 'orders']
}

const Sidebar = () => {
  let { user } = useContext(AuthContext);
  const [active, setActive] = useState('account')
  const userType = user.profile.organisation.organisation_type.name
  

  return (

    <Box
      sx={{ marginTop: 10 }}
    >
      <List>
        {nav[userType].map(page =>
          <ListItem
            active={true}
          >
            <ListItemButton
              to={`/${page}`}
              component={Link}
              onClick={() => setActive(page)}
            >
              <ListItemText primary={page.toUpperCase()} sx={{ color: page === active ? 'var(--color-primary)' : '' }} />
            </ListItemButton>
          </ListItem>
        )}
      </List>

    </Box>

  )
}

export default Sidebar;
