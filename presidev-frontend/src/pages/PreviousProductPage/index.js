import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../../settings';
import AuthContext from '../../context/AuthContext';
import { ProductCardMUI } from '../../components';
import { CartContext } from '../../context/Context';
import { CircularProgress } from '@mui/material';

const PreviousProductPage = () => {


  let { authTokens } = useContext(AuthContext);

  const Globalstate = useContext(CartContext);
  const globalstate = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            const response = await axios.get(`${API_ENDPOINT}/orders/oldorders/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
            setItems(response.data)
            setLoading(false)
        }
        getItems()
    }, [authTokens])
    return ( <div className="previousproduct-container">
        <p className="product-heading h1 pt-3">Previously Ordered Page</p>
        {loading ?  <CircularProgress  sx={{color: '#52796f'}} /> : items.map((item) => {
            return <ProductCardMUI product={item} dispatch={dispatch}/>
        })}

    </div> );
}
 
export default PreviousProductPage;
