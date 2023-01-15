import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";
import { CartContext } from "../../context/Context";
import { OpHubDashboard, OrderPageElem, NewOrder } from '../../components'
import { LocalGroceryStore, LocalShipping, Favorite } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material';


const OrderDetail = () => {

  const [orders, setOrders] = useState([])
  const [favs, setFavs] = useState([])

  const [loading, setLoading] = useState(true)
  let { authTokens, user } = useContext(AuthContext);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;
  const [cartTotal, setCartTotal] = useState(null)

  const totalQuantity = state.reduce((total, item) => {
    const totalQuantity = total + item.quantity;
    return totalQuantity;
  }, 0);


  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/orders/order`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        const responseFavs = await axios.get(`${API_ENDPOINT}/orders/favitem/`, { headers
        : { Authorization: `Bearer ${authTokens.access}` } })
        if (response.status === 200 && responseFavs.status === 200) {
          setOrders(response.data.reverse())
          setFavs(responseFavs.data.length)
          setLoading(false)
        }

        
      } catch (err) {
        console.log(err)
      }
      
    })()
  }, [])


  return (

      user?.profile?.organisation?.organisation_type?.name === "End User" ?

      <div className="order-detail">
        <h1>Orders</h1>
        <div className="d-flex my-4 flex-wrap order-stats">
                <div className="box me-4 my-1 bg-light">

                  <LocalShipping fontSize='large' />

                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Orders placed</div>
                    <div className="ms-auto number">{orders.length}</div>
                  </div>
                </div>
                <div className="box me-4 my-1 bg-light">

                  <LocalGroceryStore fontSize='large' />
                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Items in Cart</div>
                    <div className="ms-auto number">{totalQuantity}</div>
                  </div>
                </div>
                <div className="box me-4 my-1 bg-light">

                  <Favorite fontSize='large' style={{ color: 'red', opacity: 0.8, }} />
                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Favourites</div>
                    <div className="ms-auto number">{favs!==[] && favs}</div>
                  </div>
                </div>
              </div>
        {loading ? <ClipLoader
          size={40}
          cssOverride={override}
          color={"#057465"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> : orders.map((order) => {
          return (
            <>
          
              <OrderPageElem order={order} />

            </>)
        })}
      </div>

    : user?.profile?.organisation?.organisation_type?.name === "Operational Hub" ?

    <OpHubDashboard orders={orders} loading={loading} />

    : 
    
    <p>Incomplete User Profile or unknown org type</p>

  );
}

export default OrderDetail;
