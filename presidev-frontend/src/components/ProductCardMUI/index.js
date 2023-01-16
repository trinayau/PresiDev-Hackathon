import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import {useState} from 'react';

const ProductCardMUI = ({dispatch, product}) => {

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({  vertical: 'top',
    horizontal: 'center', open: false });
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity:1 } });
    setState({  vertical: 'top',
    horizontal: 'center', open: true });
  
  };


    return (
      <Card sx={{ minWidth: '300px', maxWidth: 300 }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
           Added to cart!
          </Alert>
        </Snackbar>
        {product.image_url ? <CardMedia
          component="img"
          alt={product.name}
          height="150"
          image={product.image_url}
        /> : ''}
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {product.name}
          </Typography>
         
        </CardContent>
        <CardActions>
        
          <Button
            variant="contained"
            // href="/cart"
            sx={{
              mx: "30px",
              backgroundColor: "#84a98c",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
                
              },
            }}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { product, quantity: 1 },
              });
              addToCart();
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }

export default ProductCardMUI;
