import React, {useState} from 'react'
import Boton from './Boton'
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Alert } from '@mui/material';

const Add = ({addItem}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");
    
    const onsubmit = async (e) => {
      e.preventDefault();
      if(!name || !price) {
        setError("Please enter both name and price");
        return;
      }
      
      try {
        await addItem({name: name, price: price});
        setName("");
        setPrice("");
        setError("");
        navigate("/items");
      } catch (err) {
        setError("Error adding item. Please try again.");
      }
    };
    
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <form onSubmit={onsubmit}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Product Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />
          <Boton name="Add Product"/>
        </Box>
      </form>
    </Box>
  )
}

export default Add
