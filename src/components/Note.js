import { Link } from 'react-router-dom';
import './Note.css';
const Note = ({ name }) => {
  console.log(name);
  return (
    <div className="container-two">
      <h2 className="note">Thank You For Your Order {name}</h2>
      <div className="App-link">
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Note;
