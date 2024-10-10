import { Link } from "react-router-dom";
import "./main.css";
import { useEffect, useState } from "react";

const Main = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        console.log('Retrieved Username from localStorage:', storedUsername);
        if (storedUsername) {
            setUsername(storedUsername);
        }
    },[])

    return (
        <nav>
          <div>
            <Link to="/" className="HomePage">
              <h2>JobTrust</h2>
            </Link>
          </div>
          <ul>
            <li>
            <p className="userName">{username ? `${username}` : 'Name of the user'}</p>
            </li>
            <li>
              <Link to="/login">
                <button className="nav-Login">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      );
}

export default Main;