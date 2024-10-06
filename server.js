const express = require('express');
const bcrypt = require('bcryptjs');
const {Pool} = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const pool = new Pool({ 
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT

});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existuser = await pool.query('SELECT * FROM user_info WHERE email = $1 OR username = $2', [email, username]);
        console.log(existuser.rows);

        if (existuser.rows.length !== 0) {
            return res.status(401).json('User already exists');
        }

        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            'INSERT INTO user_info (username, email, password) VALUES ($1, $2, $3) RETURNING *', 
            [username, email, hashPass]
        );

        res.status(200).json({
            message: `User ${newUser.rows[0].username} created successfully!`
        });
    } catch (error) {
        console.error('Error during signup:', error.message); // Log the error message
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
