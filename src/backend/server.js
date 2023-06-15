const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Product = require('./models/Product'); // Assuming you have a Product model
const User = require('./models/User'); // Assuming you have a User model
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://chriseun:Soccer99!@cluster0.mxjdtil.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected')
}).catch((err) => console.log('Could not connect to MongoDB', err))

app.use(cors());
app.use(bodyParser.json());

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
    res.status(404).json({message: 'Product not found.'});
  }
});

// Register new user
app.post('/register', async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password, // in a real-world scenario you should hash the password
  });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

// User login
app.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email, password: req.body.password});
  if (user) {
    res.json({message: 'Login successful!'}); 
  } else {
    res.status(401).json({message: 'Invalid email or password.'});
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
