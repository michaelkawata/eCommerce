const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


// Register User
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

        // Clear the form fields
        req.body.username = '';
        req.body.email = '';
        req.body.password = '';

        // Redirect back to the home page
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while registering the user.' });
    }
};

// User login
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Compare the inputted password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const accessToken = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SEC,
                { expiresIn: "3d" }
            );

            res.status(200).json({ token: accessToken });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'An error occurred while logging in.' });
    }
};

module.exports = {
    register,
    login,
};
