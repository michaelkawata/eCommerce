const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while registering the user.' });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Create JWT payload
            const payload = {
                id: user._id,
            };

            const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' });

            res.json({
                message: 'Login successful!',
                accessToken: accessToken
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while logging in.' });
    }
}

module.exports = {
    register,
    login
}
