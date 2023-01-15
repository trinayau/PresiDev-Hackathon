import { useEffect, useState} from 'react';
import "./index.css";
import { ProductCardMUI, CategoryCardMUI, SearchBar } from "../../components";
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { API_ENDPOINT } from '../../settings';
import AuthContext from '../../context/AuthContext';
import { CartContext } from '../../context/Context';
import { useContext } from 'react';

const AllProductPage = () => {

  const [latestProducts, setLatestProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  let { authTokens } = useContext(AuthContext);

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.info.dispatch;

  useEffect(() =>{ 
    async function searchApi() {
        try{
            const response = await axios.get(`${API_ENDPOINT}/orders/category`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
            setCategories(response.data.reverse()); 
            setLoading(true);
        }catch(err){
            console.error(err)
        }
    }
    searchApi();
    }, [])

  return (
    <div className="productsPage">
        <div className="container">
   
          <p className="product-heading h1 pt-3">Categories</p>
          </div>
          <SearchBar/>  

      <Box sx={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>

        {loading ? categories.map((category) => {
          return (
            <CategoryCardMUI
              key={category.id}
              catName={category.name}
              catImage={category.img_url}
              catId={category.id}
              catDesc = {category.description}
              dispatch={dispatch}
              product={category.cheapest_product}

            />
          );
        }) : <CircularProgress sx={{color: '#52796f'}}/>}

      
    
      </Box>
    </div>
  );
};

export default AllProductPage;
