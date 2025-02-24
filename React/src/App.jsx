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
<<<<<<< HEAD
  const initialItems = [
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ];

=======
  const items = [
    {id: 1, name: "item1", price: 1},
    {id: 2, name: "item2", price: 2},
    {id: 3, name: "item3", price: 3}
  ];
>>>>>>> parent of 0303be0 (Clase 3)
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
<<<<<<< HEAD
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
=======
     item.id = items.length + 1;
     items.push(item);
  }
  return (
  <div>
    <Header/>
    {count}
    <Boton name={"Suma"} click={sum}/>
    <Boton name={"Resta"} click={resta}/>
    <Boton name={"Mensaje"} click={() => alert(elemento)}/>
      <Add add={add}/>
    <List items={items}/>
    <Footer/>
  </div>
>>>>>>> parent of 0303be0 (Clase 3)
  );
}

export default App;