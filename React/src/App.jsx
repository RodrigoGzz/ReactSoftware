import './App.css';
import { useState, useEffect } from "react";
import Header from './components/header';
import Boton from './components/Boton';
import Lista from './components/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Login from './Login';

function App() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const initialItems = [
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ];

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);
  const [isLogin, setIsLogin] = useState(false);

  const sum = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const add = async (item) => {
    try {
      await fetch(`${API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //Hola
        body: JSON.stringify(item),
      });
      setItems([...items, { ...item, id: items.length + 1 }]);
    } catch (err) {
      console.error(err);
    }
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    if (isLogin) {
      fetch(`${API_URL}/items`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error(err));
    }
  }, [isLogin]);

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<Lista items={items} ondelete={del} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;