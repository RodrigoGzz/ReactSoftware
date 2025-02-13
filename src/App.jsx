import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Header from './components/header';
import List from './components/List';
import Add from './components/Add';
function App() {
  const items = [
    {id: 1, name: "item1", price: 1},
    {id: 2, name: "item2", price: 2},
    {id: 3, name: "item3", price: 3}
  ];
  const [count, setCount] = useState(0);
  const nombre = "Samuel Gonzalez";
  const elemento = `Hello, ${nombre}`;
  const sum = () => {setCount(count + 1)};
  const resta = () => {setCount(count - 1)}
  const add = (item) => {
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
  );
}

export default App;
