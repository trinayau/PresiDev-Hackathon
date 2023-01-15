import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";
import { OrderPageElem, NewOrder } from '../../components';
import { LocalGroceryStore, LocalShipping, Favorite } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material';

const OrderDetail = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [newOrder, setNewOrder] = useState(false)
  let { authTokens } = useContext(AuthContext);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    (async () => {

      try {
        const response = await axios.get(`${API_ENDPOINT}/orders/order`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        if (response.status === 200) {
          setOrders(response.data)
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
      }

    })()
  }, [])

  const startNewOrder = () => {
    setNewOrder(true)
  }

  return (

    !newOrder ?
      <div className="order-detail">
        <Box
          sx={{
            minWidth: 500,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant='h4' >Orders</Typography>
          <Button
            variant='outlined'
            onClick={() => startNewOrder()}
          >Start New Order</Button>
        </Box>
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
                    <div class="ms-auto number">10</div>
                  </div>
                </div>
              </div>



              <OrderPageElem order={order} />

            </>
          )
        })}
      </div>
      :
      <NewOrder />
  );
}

export default OrderDetail;
