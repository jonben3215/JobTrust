import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rePasswordVisible, setRePasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleRePasswordVisibility = () => {
        setRePasswordVisible(!rePasswordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
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
                navigate('/login'); 

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
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                />

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

                <label>Confirm Password</label>
                <div className="password-container">
                    <input 
                        type={rePasswordVisible ? "text" : "password"} 
                        name="Confirm_Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required 
                    />
                    <FontAwesomeIcon 
                        icon={rePasswordVisible ? faEyeSlash : faEye} 
                        onClick={toggleRePasswordVisibility} 
                        className="eye-icon"
                    />
                </div>
                <button type="submit">Sign Up</button>
                <Link to="/login">
                    <button className='LoginButt'>Login</button>
                </Link>
                <Link to="/">
                <button className='HomeButt'>Home</button>
                </Link>
          
                
            </form>
        </div>
    );
};

export default Signup;
