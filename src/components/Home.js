import React from 'react'
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'

const Home = () => {
    
    return(
     
        <div>
            <h1>Home</h1>
            
            <Link id="order-pizza" to="/pizza">Order Now</Link>
        </div>
   
    )
}

export default Home