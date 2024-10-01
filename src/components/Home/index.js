import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="HomePage">
          <h2>JobTrust</h2>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/signup">
            <button className="nav-SignUp">Sign Up</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="nav-Login">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
