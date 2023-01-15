import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";

import { OpHubDashboard, OrderPageElem, NewOrder } from '../../components'
import { LocalGroceryStore, LocalShipping, Favorite } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material';


const OrderDetail = () => {

  const [orders, setOrders] = useState([])
  const [favs, setFavs] = useState([])
  const [loading, setLoading] = useState(true)
  let { authTokens, user } = useContext(AuthContext);


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
        <div class="d-flex my-4 flex-wrap order-stats">
                <div class="box me-4 my-1 bg-light">

                  <LocalShipping fontSize='large' />

                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Orders placed</div>
                    <div class="ms-auto number">{orders.length}</div>
                  </div>
                </div>
                <div class="box me-4 my-1 bg-light">

                  <LocalGroceryStore fontSize='large' />
                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Items in Cart</div>
                    <div class="ms-auto number">10</div>
                  </div>
                </div>
                <div class="box me-4 my-1 bg-light">

                  <Favorite fontSize='large' style={{ color: 'red', opacity: 0.8 }} />
                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Favourites</div>
                    <div class="ms-auto number">{favs!==[] && favs}</div>
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
