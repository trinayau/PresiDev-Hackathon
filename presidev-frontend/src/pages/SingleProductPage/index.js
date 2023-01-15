import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SearchBar, Supplier, BackButton } from "../../components";
import "./index.css";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { CircularProgress } from "@mui/material";
import { API_ENDPOINT } from '../../settings';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

const SingleProductPage = ({ image, productDesc }) => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  let { authTokens } = useContext(AuthContext);

  const { id, name } = useParams();

  useEffect(() => {
    async function searchApi() {
     
      try {
        const categoryResult = await axios.get(`${API_ENDPOINT}/orders/singlecategory/${id}/`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        setCategory(categoryResult.data);
        
        // get products
        const result = await axios.get(`${API_ENDPOINT}/orders/itemcategory/?category_id=${id}/`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        setProducts(result.data);
        setLoading(true);
      } catch (err) {
        console.error(err);
      }
    }
    searchApi();
  }, [id]);

  const checkProductsExist = (products) => {
    if (products.length > 0) {
        
      return(products.map((product, index) => {
        return <Supplier key={product.id} product={product} />;
      }))
    } else {
        document.querySelector(".supplier-list-heading").style.display = "none";
      return <div className="no-products">No products found, sorry! Please check back again later for new {name} products.</div>;
    }
  };

  return (
    <span className="single-product-page" >
      <SearchBar Heading="Products" />
      <BackButton />
 
      <div className="single-product-section">
        {loading ? (
          <div className="single-product-img">
            <img
              clas="image_fluid"
              src={category.img_url}
              alt={image}
              style={{ maxHeight: "200px", borderRadius: 5 }}
            />
          </div>
        ) : (
          <BrokenImageIcon sx={{ fontSize: "200px" }} />
        )}

        <div className="single-product-info">
          <div className="single-product-name">{name}</div>
          <div className="singel-product-text">
            {category.description == null ? (
              <div className="no-desc">
                {name} has yet to be given a description!
              </div>
            ) : (
              <div className="desc">{category.description}</div>
            )}
          </div>
        </div>
      </div>
      <div className="supplier-list">
        <div
          className="supplier-list-heading supplier" id="supplierHeading"
          style={{ fontWeight: 600}}
        >
          <div>Item</div>
          <div>Quantity</div>
          <div>Add </div>
          <div>Favourite</div>
        </div>
        {loading ? checkProductsExist(products) : <CircularProgress />}
      </div>
    </span>
  );
};

export default SingleProductPage;
