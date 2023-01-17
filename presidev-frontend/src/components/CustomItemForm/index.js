import { useState } from "react";

import { Button } from "@mui/material";
const CustomItemForm = ({dispatch}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        dispatch({ type: "ADD_TO_CUSTOMITEM", payload: { name, description, url, quantity } });
        setName("");
        setDescription("");
        setUrl("");
        setQuantity(1);
        
    };

    return ( <div className="custom-item-form">
    <p className="product-heading h1 pt-3">Add Custom Item</p>
    <form className="custom-item-form-form">
      <label className="custom-item-form-label">Name*</label>
      <input className="custom-item-form-input" type="text" value={name} name="name" 
        onChange={(e) => setName(e.target.value)}
      />
      <label className="custom-item-form-label">Description*</label>
      <input className="custom-item-form-input" type="text" name="description" value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="custom-item-form-label">URL to item</label>
      <input className="custom-item-form-input" type="text" name="url" value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <label className="custom-item-form-label">Quantity*</label>
      <input className="custom-item-form-input" type="number" name="quantity" value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleAdd()} sx={{backgroundColor:'#354F52', my:'5px'}}>Add</Button>
    </form>
    
  </div> );
}
 
export default CustomItemForm;
