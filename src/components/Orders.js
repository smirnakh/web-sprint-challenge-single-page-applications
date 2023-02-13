import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';
// import Pizza from '../Assets/Pizza.jpg';
import pizzaOne from '../Assets/pizza-1.jpeg';
import pizzaTwo from '../Assets/pizza-2.jpeg';
import pizzaThree from '../Assets/pizza-3.jpeg';

const Orders = ({ name, setName }) => {
  const [checked, setChecked] = useState(false);
  const [nameError, setNameError] = useState('');

  const handleChange = () => {
    setChecked(!checked);
  };

  const validateOnChange = (e) => {
    const { value } = e.target;
    if (value.length < 7) {
      setNameError('name must be at least 6 characters');
    } else {
      setNameError('');
    }
    setName(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const fdata = new FormData(e.target);
    axios
      .post(`https://reqres.in/api/orders`, fdata)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="App-link">
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>

      <h1>Build Your Own Pizza</h1>
      <div className="container">
        <form id="pizza-form" onSubmit={onSubmit}>
          <label className="name">
            Enter your name:
            <input
              type="text"
              name="name"
              value={name}
              id="name-input"
              onChange={validateOnChange}
            />
            <div>{nameError}</div>
          </label>

          <h2>Choice Of Size</h2>

          <label className="size">
            Pick your size:
            <select id="size-dropdown" name="size-dropdown">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>

          <h2>Choice Of Topping</h2>
          <div className="topping">
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Peperoni
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Sausage
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              BBQ Sauce
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Canadian Bacon
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Onions
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Green Paper
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Diced Tomatos
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Black Olives
            </label>
            <label>
              <input
                name="toppings[]"
                type="checkbox"
                onChange={handleChange}
              />
              Pineapple
            </label>
          </div>
          <input id="special-text" placeholder="Message" name="special-text" />

          <button id="order-button" type="submit">
            <Link to="/note">Submit</Link>
          </button>
        </form>
        <div className="pizza">
          <img src={pizzaTwo} alt="pizza" id="pizzaTwo" />
          <img src={pizzaOne} alt="pizza" id="pizzaOne" />
          <img src={pizzaThree} alt="pizza" id="pizzaThree" />
          {/* <img src={pizzaThree} alt="pizza" id="pizzaFour" /> */}
        </div>
      </div>
    </>
  );
};

export default Orders;
