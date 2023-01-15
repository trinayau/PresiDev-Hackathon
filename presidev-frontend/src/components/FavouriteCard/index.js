import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { API_ENDPOINT } from "../../settings";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useContext } from "react";

const FavouriteCard = ({
    favourite,
    dispatch,
    removeFavourite,
}) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

    const { authTokens } = useContext(AuthContext);

  const [message, setMessage] = useState("");

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ vertical: "top", horizontal: "center", open: false });
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { favourite, quantity: 1 } });
    setState({ vertical: "top", horizontal: "center", open: true });
    setMessage("Added to cart");
  };

    const unFavourite = async () => {
        const favId= favourite.item.id
        const response = await axios.delete(`${API_ENDPOINT}/orders/favitem/${favId}/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
    setMessage(response.data.message);
    setState({ vertical: "top", horizontal: "center", open: true });
    removeFavourite(favourite.id);
    return
    
    
    };

  return (
    <Card sx={{ minWidth: "300px", maxWidth: 300, margin: '50px 0px 50px 0px' }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

      <CardMedia component="img" alt={favourite.item.name} height="150" image={favourite.item.image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {favourite.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {favourite.item.description}
        </Typography>
      </CardContent>
      <CardActions>
    
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#057465",
            "&:hover": {
              backgroundColor: "#9CD5CB",
              color: "#ffffff",
              textDecoration: "none",
              transition: "all 0.2s ease-in",
            },
          }}
          onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: { product: favourite.item, quantity: 1 } });
          }}
        >
          Add to Order
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#057465",
            "&:hover": {
              backgroundColor: "#9CD5CB",
              color: "#ffffff",
              textDecoration: "none",
              transition: "all 0.2s ease-in",
            },
          }}
          onClick={() => {
         unFavourite();
          }}
        >
          Unfavourite
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavouriteCard;
