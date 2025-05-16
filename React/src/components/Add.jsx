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
    <div>
      <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="" id=""/>
      <input type="text" name="" id=""/>
      <Boton name="Agregar"/>
    </div>
  )
}

export default Add
