import axios from 'axios';
import React, { useState } from 'react';
import {Route} from 'react-router-dom';

const Orders = () => {
  
  const [name, setName] = useState('')
  const [checked, setChecked] = React.useState(false);
  const [nameError, setNameError] = useState('')
  
  const handleChange = () => {
    setChecked(!checked);
  };

  const validateOnChange = (e) => {
    const {value} = e.target
    if(value.length < 3){
      setNameError("name must be at least 2 characters")
    } else {
      setNameError('')
    }
    setName(value)
  }
  const onSubmit = (e) =>{
    e.preventDefault();
     const fdata = new FormData(e.target)

     axios.post(`https://reqres.in/api/orders`, fdata )
    .then(res => res.data)
    .catch(err => console.error(err));
  }
    return (
        <>
           <Route path="/pizza">
           <h1>Build Your Own Pizza</h1>
           </Route>
           
           
      <form id="pizza-form" onSubmit={onSubmit}>
         <label>Enter your name:
            <input type="text" name="name" value={name}  id="name-input" onChange={validateOnChange}/>
        <div>{nameError}</div>
         </label>
          

         <h2>Choice Of Size</h2>
   
         <label>Pick your size:
          <select id="size-dropdown"  name="size-dropdown">           
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
         </label>
     


         <h2>Choice Of Topping</h2>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Peperoni</label>
         <label><input  name="toppings[]" type="checkbox" onChange={handleChange}/>Sausage</label>
         <label><input name="toppings[]"  type="checkbox" onChange={handleChange}/>BBQ Sauce</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Canadian Bacon</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Onions</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Green Paper</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Diced Tomatos</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Black Olives</label>
         <label><input name="toppings[]" type="checkbox" onChange={handleChange}/>Pineapple</label>
      
      {/* <h2>Choice Of Sauce</h2>
      <form>
          <label><input type="radio" value="option1" checked={true} />Original Red</label>
          <label><input type="radio" value="option1" checked={true} />Garlic Ranch</label>
          <label><input type="radio" value="option1" checked={true} />BBQ Sauce</label>
          <label><input type="radio" value="option1" checked={true} />Spinach Alfredo</label>     
      </form> */}
    
         
             <input id="special-text" placeholder="Message" name="special-text"/>
             <button id="order-button">Submit</button>
    </form>

        </>
    )
}

export default Orders;