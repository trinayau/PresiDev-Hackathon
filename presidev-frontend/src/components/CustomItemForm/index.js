import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const CustomItemForm = ({ dispatch }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    dispatch({
      type: "ADD_TO_CUSTOMITEM",
      payload: { name, description, url, quantity },
    });
    setName("");
    setDescription("");
    setUrl("");
    setQuantity(1);
  };

  return (
    <div className="custom-item-form">
      <p className="product-heading h1 pt-3 my-5">Add Custom Item</p>
      <Grid container spacing={3}>
        <form className="custom-item-form-form">
          {/* <label className="custom-item-form-label">Name*</label> */}
          <TextField
            required
            id="name"
            name="name"
            label="Name"
           
            className="custom-item-form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            className="custom-item-form-input"
            type="text"
    
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="url"
            label="Url to Item"
            className="custom-item-form-input"
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            required
            id="quantity"
            label="Quantity"
            className="custom-item-form-input"
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => handleAdd()}
            sx={{ backgroundColor: "#354F52", my: "5px" }}
          >
            Add
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default CustomItemForm;
