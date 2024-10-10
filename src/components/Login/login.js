import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const fetchUser = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try{
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST', // Use POST for security reasons
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }) // Send email and password to the server
            });

            const data = await response.json();
            if(response.ok)
            {
                alert(data.message); // Successful login message
                setEmail('');
                setPassword('');
                navigate('/main')
                localStorage.setItem('username', data.username);
            }
            else{
                alert(data);
                setPassword('');
            }
        }
        catch (error){
            console.error('Error:', error);
            alert('Error during login, please try again later');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={fetchUser}>
            <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <label>Password</label>
                <div className="password-container">
                    <input 
                        type={passwordVisible ? "text" : "password"} 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <FontAwesomeIcon 
                        icon={passwordVisible ? faEyeSlash : faEye} 
                        onClick={togglePasswordVisibility} 
                        className="eye-icon"
                    />
                </div>

                <button type="submit">Login</button>
                <Link to="/signup">
                    <button className='SignButt'>Sign Up</button>
                </Link>
                <Link to="/">
                <button className='HomeButt'>Home</button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
