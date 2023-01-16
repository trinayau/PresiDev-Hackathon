import { SearchBar, CartCard } from "../../components";
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import "./index.css";
import { useNavigate } from "react-router-dom";
const CartPage = () => {

  const [cartTotal, setCartTotal] = useState(0);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

  const { authTokens } = useContext(AuthContext);
  
  const total = state.reduce((total, item) => {
    const totalPrice = total + item.product.total * item.quantity;
    return parseFloat(totalPrice.toFixed(2));
  }, 0);

  const totalEmissions = state.reduce((total, item) => {
    const totalEmissions = total + item.product.offset * item.quantity;
    return parseFloat(totalEmissions.toFixed(2));
  }, 0);

  const totalQuantity = state.reduce((total, item) => {
    const totalQuantity = total + item.quantity;
    return totalQuantity;
  }, 0);


  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate(link);
  };

   const handleCheckout = async (e) => {
    // post cartitem with id and quantity to backend:
    const cartItems = state.map((item) => {
      return { id: item.product.id, quantity: item.quantity };
    });

    const response = await fetch("http://127.0.0.1:8000/api/orders/create_order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authTokens.access})}`
      },
      body: JSON.stringify(cartItems),
    });

    // get back order id
    const data = await response.json();
    console.log(data.id);
    // redirect to checkout page with order id
    handleLink(`/orderstatus/${data.id}`);
   }


  
  return (
    <>
      <p className="product-heading h1 pt-3">Shopping Cart</p>
      {state.length > 0 ?
      <>
      <div class="cart">
         {state.map((cartItem) => (
          <CartCard cartItem={cartItem.product} id={ cartItem.id } key={cartItem.id} itemQuantity={cartItem.quantity} cartTotal={cartTotal} setCartTotal={setCartTotal} dispatch={dispatch}/>
        ))}
      </div>
      <div class="cart-page-footer">
   
        <div className="cart-page-footer-checkout d-flex justify-content-evenly">
          <p>Total Quantity: {state && totalQuantity}</p>
        <Button variant="contained" onClick={() => handleCheckout()} sx={{backgroundColor:'#354F52', my:'5px'}}>Checkout</Button>
        </div>
      </div>
      </> : <div className="cart-page-empty text-center">
        <h2 className="product-heading pt-3">Your cart is empty</h2>
        <Button variant="contained" onClick={() => handleLink('/categories')} sx={{backgroundColor:'#354F52', my:'5px'}}>Continue Shopping</Button>
      </div>}
    </>
  );
};

export default CartPage;
