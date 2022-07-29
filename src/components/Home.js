import React from 'react'
import {BrowserRouter as Router, useHistory} from 'react-router-dom'
// useHistory history.push onclickevent in the button
const Home = () => {
    const history = useHistory();

    const handleHistory = () =>{
        history.push("/pizza")
    }
    return(
      <Router>
        <div>
            <h1>Home</h1>
            <button onClick={handleHistory} id="order-pizza">Order Now</button>
        </div>
    </Router>
    )
}

export default Home