import { Link } from 'react-router-dom';
import './Note.css';
const Note = (props) => {
  return (
    <div className="container-two">
      <h2 className="note">Thank You For Your Order{props.name}</h2>
      <div className="App-link">
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Note;
