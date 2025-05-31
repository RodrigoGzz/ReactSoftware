import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const LifecycleComponent = ({ itemName }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Mount effect
  useEffect(() => {
    console.log('🚀 LifecycleComponent: Component MOUNTED');
    return () => {
      console.log('💀 LifecycleComponent: Component UNMOUNTED');
    };
  }, []);

  // Update effect for counter
  useEffect(() => {
    if (counter > 0) {
      console.log(`🔄 LifecycleComponent: Counter UPDATED to ${counter}`);
    }
  }, [counter]);

  // Update effect for itemName prop
  useEffect(() => {
    console.log(`📝 LifecycleComponent: ItemName prop UPDATED to ${itemName}`);
  }, [itemName]);

  // Effect for visibility toggle
  useEffect(() => {
    console.log(`👁️ LifecycleComponent: Visibility CHANGED to ${isVisible}`);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <Box sx={{ padding: 2, border: '1px dashed gray', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Component is hidden (but still mounted)
        </Typography>
        <Button onClick={() => setIsVisible(true)} size="small">
          Show Component
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" gutterBottom>
        Lifecycle Demo Component
      </Typography>
      <Typography variant="body2" gutterBottom>
        Current item: {itemName}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Counter: {counter}
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
        <Button 
          variant="outlined" 
          size="small"
          onClick={() => setCounter(prev => prev + 1)}
        >
          Increment Counter
        </Button>
        <Button 
          variant="outlined" 
          size="small"
          onClick={() => setIsVisible(false)}
        >
          Hide Component
        </Button>
      </Box>
      
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        Check the browser console to see lifecycle logs!
      </Typography>
    </Box>
  );
};

export default LifecycleComponent;
