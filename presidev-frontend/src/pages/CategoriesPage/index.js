import { useEffect, useState} from 'react';

import "./index.css";
import { ProductCardMUI, CategoryCardMUI } from "../../components";
import { CircularProgress } from '@mui/material';
import axios from 'axios';

// import { CartContext } from '../../context/Context';
import { useContext } from 'react';



const AllProductPage = () => {

  const [latestProducts, setLatestProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

//   const Globalstate = useContext(CartContext);
//   const dispatch = Globalstate.info.dispatch;

//   useEffect(() =>{ 
//     async function searchApi() {
//       const requestLatest = "http://127.0.0.1:8000/api/v1/latest-products/";
//       const requestCategories = "http://127.0.0.1:8000/api/v1/categories/";

//         try{
//             const resultLatest = await axios.get(requestLatest,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//             }
         
//         });
//             const resultCategories = await axios.get(requestCategories,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//             }
//         });

//             setLatestProducts(resultLatest.data);
//             setCategories(resultCategories.data); 
//             setLoading(true);
//         }catch(err){
//             console.error(err)
//         }
//     }
//     searchApi();
//     }, [])

  
    

  return (
    <div className="productsPage">

      {/* latest products */}
      <section className="search-bar">
          <p className="product-heading">Latest Products</p>
      </section>

      <section className="latest-products">
        {loading ? latestProducts.map((product) => {
          return (
            <ProductCardMUI
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              offset={product.offset}
              id={product.id}
            //   dispatch={dispatch}
              product={product}
   
            />
          );
        }) : <CircularProgress sx={{color: '#52796f', textAlign:'center'}}/>}

      </section>

      <section>

        {loading ? categories.map((category) => {
          return (
            <CategoryCardMUI
              key={category.id}
              catName={category.name}
              catPrice={category.minimum_product_price}
              catImage={category.image_url}
              catOffset={category.minimum_offset_price}
              catId={category.id}
            //   dispatch={dispatch}
              product={category.cheapest_product}

            />
          );
        }) : <CircularProgress sx={{color: '#52796f'}}/>}

      
    
      </section>
    </div>
  );
};

export default AllProductPage;
