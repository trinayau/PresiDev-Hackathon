import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';

const OrderDetail = () => {

  const [orders, setOrders] = useState([])
  let { authTokens } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      
      try {
        console.log(authTokens)
        const response = await axios.get(`${API_ENDPOINT}/orders/order`, {headers: {Authorization: `Bearer ${authTokens.access}`}})
        if (response.status == 200) {
          console.log(response)
          setOrders(response.data)
        }
      } catch(err) {
        console.log(err)
      }
      
  })()
  }, [])

  return (
    <div className="order-detail">
      <h1>Orders</h1>
        {orders.map(({name, description, status}) => `${name} - ${description} - ${status.name}`)}
    </div>
  );
}

export default OrderDetail;
