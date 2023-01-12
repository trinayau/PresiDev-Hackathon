import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";
import { OrderPageElem } from '../../components'

const OrderDetail = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
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

  return (
    <div className="order-detail">
      <h1>Orders</h1>
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
            <div class="d-flex my-4 flex-wrap">
              <div class="box me-4 my-1 bg-light">
                <img className="img-fluid" src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                  alt="box" />
                <div class="d-flex align-items-center mt-2">
                  <div class="tag">Orders placed</div>
                  <div class="ms-auto number">{orders.length}</div>
                </div>
              </div>
              <div class="box me-4 my-1 bg-light">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                  alt="cart" />
                <div class="d-flex align-items-center mt-2">
                  <div class="tag">Items in Cart</div>
                  <div class="ms-auto number">10</div>
                </div>
              </div>
              <div class="box me-4 my-1 bg-light">
                <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                  alt="heart" />
                <div class="d-flex align-items-center mt-2">
                  <div class="tag">Favourites</div>
                  <div class="ms-auto number">10</div>
                </div>
              </div>
            </div>



            <OrderPageElem order={order} />

          </>)
      })}
    </div>
  );
}

export default OrderDetail;
