import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rePasswordVisible, setRePasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message); // Successful signup message
                setUsername('');
                setEmail('');
                setPassword('');
                setRePassword('');
            } else {
                alert(data); // Error message from the server
                setUsername('');
                setEmail('');
                setPassword('');
                setRePassword('');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error during signup, please try again later');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

                <button type="submit">Sign Up</button>
                <Link to="/">
                <button className='HomeButt'>Home</button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
