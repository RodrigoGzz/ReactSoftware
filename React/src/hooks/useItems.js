import { useState, useEffect } from 'react';

const useItems = (isLogin) => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialItems = [
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ];

  useEffect(() => {
    if (isLogin) {
      fetchItems();
    } else {
      setItems([]);
    }
  }, [isLogin]);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/firebase/items`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        console.warn("API did not return an array, using initial items");
        setItems(initialItems);
      }
    } catch (err) {
      console.error("Error fetching items:", err);
      setError(err.message);
      setItems(initialItems);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      console.log("Sending item to backend:", item);
      const response = await fetch(`${API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const newItem = await response.json();
      console.log("Item created:", newItem);
      setItems(prev => [...prev, newItem]);
      return newItem;
    } catch (err) {
      console.error("Error adding item:", err);
      setError(err.message);
      throw err;
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getItemById = (id) => {
    return items.find(item => item.id === id);
  };

  return {
    items,
    loading,
    error,
    addItem,
    deleteItem,
    getItemById,
    fetchItems
  };
};

export default useItems;
