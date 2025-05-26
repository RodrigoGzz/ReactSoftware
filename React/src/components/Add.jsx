import React, {useState} from 'react'
import Boton from './Boton'
import { useNavigate } from 'react-router-dom';

const Add = ({add}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    
    const onsubmit = (e)=> {
      e.preventDefault();
      if(!name || !price) {alert("Ingresa un dato"); return};
      add({name:name, price:price});
      setName("")
      setPrice("")
      navigate("/items")
    };
    
  return (
    <form onSubmit={onsubmit}>
      <div>
        <input 
          onChange={(e)=> setName(e.target.value)} 
          value={name} 
          type="text" 
          placeholder="Nombre del producto"
        />
        <input 
          onChange={(e)=> setPrice(e.target.value)} 
          value={price} 
          type="number" 
          placeholder="Precio"
        />
        <Boton name="Agregar"/>
      </div>
    </form>
  )
}

export default Add
