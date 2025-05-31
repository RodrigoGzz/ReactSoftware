import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import LifecycleComponent from './LifecycleComponent';

const ItemDetail = ({ getItemById }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItemById(id);

  if (!item) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4">Item not found</Typography>
        <Button onClick={() => navigate('/items')} variant="contained">
          Back to Items
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Item Details
      </Typography>
      
      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: ${item.price}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Item ID: {item.id}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        <Button 
          component={Link} 
          to="/items" 
          variant="contained"
        >
          Back to Items
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => alert('Edit functionality not implemented')}
        >
          Edit Item
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Component Lifecycle Demo:
      </Typography>
      <LifecycleComponent itemName={item.name} />
    </Box>
  );
};

export default ItemDetail;
