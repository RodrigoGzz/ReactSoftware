import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Item = ({ item, ondelete }) => {
  return (
    <Card sx={{ margin: 1, maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
          <Button 
            component={Link} 
            to={`/items/${item.id}`} 
            variant="contained" 
            size="small"
          >
            View Details
          </Button>
          {ondelete && (
            <Button 
              onClick={() => ondelete(item.id)} 
              variant="outlined" 
              color="error"
              size="small"
            >
              Delete
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Item;
