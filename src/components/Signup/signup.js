import './signup.css';

const Signup = () => {
    return(
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>Username</label>
                <input type="text" name="username" required />
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Password</label>
                <input type="password" name="password" required />
                <label>Retype Password</label>
                <input type="Repassword" name="Re password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};


export default Signup;
