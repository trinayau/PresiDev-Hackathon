import { SearchBar, CartCard, CustomItemForm, CustomItemCard } from "../../components";
import Button from '@mui/material/Button';
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINT } from "../../settings";
import { CustomItemContext } from "../../context/CustomItemContext";



const CartPage = () => {

  const [cartTotal, setCartTotal] = useState(0);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

  const CustomItemState = useContext(CustomItemContext);
  const customState = CustomItemState.info.state;
  const CustomItemDispatch = CustomItemState.info.dispatch;

  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    const totalStateQuantity = state.reduce((acc, item) => {
      return acc + item.quantity;
    }
    , 0);

    const totalCustomStateQuantity = customState.reduce((acc, item) => {
      return acc + item.quantity;
    }
    , 0);

    const total = totalStateQuantity + totalCustomStateQuantity;
    setCartTotal(total);
  }, [customState, state]);


  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate(link);
  };

   const handleCheckout = async (e) => {
    // post cartitem with id and quantity to backend:

    const cartItems = state.map((item) => {
      return { id: item.product.id, quantity: item.quantity };
    });

    let customItems = [];

    if(customState.length > 0) {
     customItems = customState.map((item) => {
      // check if item.url is null and if so, set it to empty string
      if (item.url === null) {
        item.url = "";
      }
      return { name: item.name, description: item.description, url: item.url, quantity: item.quantity };
    });
  } else {
     customItems = [];
  }

    const response = await axios.post(`${API_ENDPOINT}/orders/order/`, {items: cartItems, custom_items: customItems}, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authTokens.access})}`
      }
    });

    // get back order id
    const data = await response.data;
    console.log(data, "data");
    // redirect to checkout page with order id
    handleLink(`/orders/${data.order}`);
    // empty carts
    dispatch({ type: "CLEAR" });
    CustomItemDispatch({ type: "CLEAR" });
   }


  
  return (
    <>
      <p className="product-heading h1 pt-3">Shopping Cart</p>
      {(state && state.length > 0) || (customState && customState.length > 0) ?
      <>
      <div class="cart">
         {state.map((cartItem) => (
          <CartCard cartItem={cartItem.product} id={ cartItem.id } key={cartItem.id} itemQuantity={cartItem.quantity} cartTotal={cartTotal} setCartTotal={setCartTotal} dispatch={dispatch}/>
        ))}
      </div>
  {customState && customState.length > 0 ? <div className="cart-page-custom-items">
    <p className="product-heading h1 pt-3">Custom Items</p>
    {customState.map((customItem) => (
      <CustomItemCard customItem={customItem} key={customItem.id} dispatch={CustomItemDispatch}/>
    ))}
  </div> 
  : null}

      <div class="cart-page-footer">
        <div className="cart-page-footer-checkout ">
          <p>Total Quantity: {state && cartTotal}</p>
        <Button variant="contained" onClick={() => handleCheckout()} sx={{backgroundColor:'#354F52', my:'5px'}}>Checkout</Button>
        </div>
      </div>
      </> : <div className="cart-page-empty text-center">
        <h2 className="product-heading pt-3">Your cart is empty</h2>
        <Button variant="contained" onClick={() => handleLink('/categories')} sx={{backgroundColor:'#354F52', my:'5px'}}>Continue Shopping</Button>
      </div>}
      <CustomItemForm dispatch={CustomItemDispatch}/>
      
    </>
  );
};

export default CartPage;
