import { useContext, useEffect } from "react";
import { AuthContext } from '../../context/AuthContext'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from "@mui/material";

const ProfileDetail = () => {
  let { user } = useContext(AuthContext);


  return (
    <Card
      sx={{

      }}
      raised
    >
      {/* <CardMedia
        component={() =>
          <Box
            style={{
              minWidth: '100%',
              minHeight: 200,
              background: "linear-gradient(180deg, white 50%, var(--color-primary) 50%)",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Avatar
              sx={{ width: 125, height: 125, bgcolor: 'var(--color-primary)', border: 1 }}
            >{user?.name[0]}</Avatar>
          </Box>
        }
      /> */}
      <CardContent>

        <Typography gutterBottom variant="h4">
          {user?.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {user?.profile?.organisation?.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          User Role: {user?.profile?.user_type?.name}
        </Typography>
        <CardActions>
          <Button size="small">Update Details</Button>
        </CardActions>
        <Typography gutterBottom variant="h5" sx={{ textDecoration: 'underline' }}>
          Location
        </Typography>
        {user?.profile?.location?.street_number &&
          <Typography variant="h5" color="text.secondary">
            {user?.profile?.location?.street_number},
          </Typography>
        }
        <Typography variant="h5" color="text.secondary">
          {user?.profile?.location?.first_line},
        </Typography>
        {user?.profile?.location?.second_line &&
          <Typography variant="h5" color="text.secondary">
            {user?.profile?.location?.second_line},
          </Typography>
        }
        <Typography variant="h5" color="text.secondary">
          {user?.profile?.location?.county},
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {user?.profile?.location?.country},
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {user?.profile?.location?.postcode}
        </Typography>
        <br />
        <br />
        <Typography gutterBottom variant="h5" color="text.secondary">
          Phone: {user?.profile?.phone}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default ProfileDetail;
