import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const CustomItemCard = ({customItem, dispatch}) => {

    const [quantity, setQuantity] = useState(customItem.quantity);

    useEffect(() => {
        if (quantity < 0) {
          // delete item from cart
        }
      }, [quantity]);

      useEffect(() => {
        setQuantity(customItem.quantity);
        }, [customItem.quantity]);

    const minus = (e) => {
        e.preventDefault();
        if (quantity > 1) {
          dispatch({ type: "DECREASE", payload: { name: customItem.name } });
        }
      };
    
      const plus = (e) => {
        e.preventDefault();
        if (quantity > 0) {
          dispatch({ type: "INCREASE", payload: { name: customItem.name } });
        }
      };
    
    return ( <div className="custom-item-card cart-info">
    <p className="custom-item-card-name">Name: {customItem.name}</p>
    <p className="custom-item-card-description">Desc: {customItem.description}</p>
    <div className="cart-item-info">
          
          <div className="cart-item-details">
            <span className="quantity-changers" onClick={minus} style={{cursor: 'pointer'}}>
              -
            </span>{" "}
            <span className="quantity-box">{quantity}</span>{" "}
            <span className="quantity-changers" onClick={plus} style={{cursor: 'pointer'}}>
              +
            </span>
          </div>
          <div className="cart-item-details">
            <DeleteIcon sx={{
              ":hover": {
                color: "#354F52",
                cursor: "pointer",
              },
            }} onClick={() => dispatch({ type: "REMOVE", payload: { name: customItem.name } })}/>
          </div>
        </div>
    
    </div> );
}
 
export default CustomItemCard;
