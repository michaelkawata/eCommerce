const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Product = require('./models/Product'); // Assuming you have a Product model
const User = require('./models/User'); // Assuming you have a User model
const PORT = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
console.log('PORT --------------------', PORT);

// MongoDB connection
mongoose.connect('mongodb+srv://chriseun:Soccer99!@cluster0.mxjdtil.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected')
}).catch((err) => console.log('Could not connect to MongoDB', err))

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // new code from stackoverflow
app.use(express.json()); // new code from stackoverflow

// Get all products
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get specific product
app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found.' });
  }
});

// Register new user
app.post('/register', async (req, res) => {
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
});


// User login
app.post('/login', async (req, res) => {
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
      res.json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
