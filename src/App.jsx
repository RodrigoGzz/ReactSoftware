import './App.css';
import { useState } from "react";
import Header from './components/header';
import Boton from './components/Boton';
import Lista from './components/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Login from './Login';

function App() {
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

  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const del = (id)=> {
    setItems(items.filter((item)=> item.id !== id));

  };

  const login = (user) => {
    if(user.username === "rodrigo" && user.password === "1234") {
      setIsLogin(true);
    } 
    return isLogin;
  }

  const logout = () => {
    setIsLogin(false);
  }
  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login}/>} />
        <Route path="/add" element={<Add add={add}/>} />
        <Route path="/items" element={<Lista items={items} ondelete={del} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;