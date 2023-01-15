import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext, React } from 'react';
import { CartContext } from '../../context/Context';
import { Favorite } from '@mui/icons-material';
import axios from 'axios';
import { Checkbox, IconButton, Snackbar } from "@mui/material";
import { API_ENDPOINT } from '../../settings';
import AuthContext from '../../context/AuthContext';
import { Alert } from "@mui/material";
import { useEffect } from 'react';
import { FavoriteBorder } from '@mui/icons-material';


const Supplier = ({product}) => {

    const { authTokens } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    
    const [quantity, setQuantity] = useState(1);
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const [check, setCheck] = useState(false);
      const [favCheck, setFavCheck] = useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setState({  vertical: 'top',
        horizontal: 'center', open: false });
      };
    
    const handleFavorite = async(e) => {
        e.preventDefault()
        // if check is true, remove from favourites:
        if (check) {
            const response = await axios.delete(`${API_ENDPOINT}/orders/favitem/${product.id}/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
            setMessage(response.data.message)
            setState({open: true, vertical: 'top', horizontal: 'center'})
            setCheck(false)
            return
        } else {
        const response = await axios.post(`${API_ENDPOINT}/orders/favitem/`, {item: product.id}, { headers
        : { Authorization: `Bearer ${authTokens.access}` } })
        setMessage(response.data.message)
        if (response.data.message === 'Item Favourited!') {
          setCheck(true)
          
        }
        setState({open: true, vertical: 'top', horizontal: 'center'})
    }
      }
      
      const { vertical, horizontal, open } = state;

      useEffect(() => {

        const getFav = async () => {
          const response = await axios.get(`${API_ENDPOINT}/orders/favitem/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
          response.data.map((fav) => {
            if (fav.item.id === product.id) {
              setCheck(true)
            }
          })
          setFavCheck(true)
        }
        getFav()
      }, [])


     const Globalstate = useContext(CartContext);
  const globalstate = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

    // cart function
    const addToCart = () => {
        console.log('add to cart')
        dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });

    }


    return (<div className="supplier">
         <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
           {message}
          </Alert>
        </Snackbar>
    <div className="supplier-name">{product.name}</div>
    <div className="add-cart">
        {/* input for number of items */}
        <input type="number" min="1" max="90" value={quantity} onChange={(e) => setQuantity(e.target.value)}className="quantity" style={{textAlign: 'center'}}/>
   </div>
    <div className="add-cart">
    <ShoppingCartIcon 
    onClick={addToCart} 
    sx={{
        ":hover": {
            color: "#52796f",
            cursor: "pointer"
        }
    }}/>
    </div>
    {favCheck &&
    <div className="favourite">
    <IconButton aria-label="add to favorites" onClick={(e)=>handleFavorite(e)}>
          <Checkbox checked={check}icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
    </div>
    }
</div> );
}
 
export default Supplier;
