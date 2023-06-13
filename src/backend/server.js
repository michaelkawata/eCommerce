const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 5000;

// Read JSON data file
let data = JSON.parse(fs.readFileSync(path.join(__dirname, './db.json'), 'utf8'));

// Apply middleware
app.use(cors());
app.use(bodyParser.json());

// Get all products
app.get('/products', (req, res) => {
    res.json(data.products);
});

// Get specific product
app.get('/products/:id', (req, res) => {
    const product = data.products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found.'});
    }
});

// Register new user
app.post('/register', (req, res) => {

    const newUser = {
        id: data.users.length + 1, 
        email: req.body.email,
        password: req.body.password, 
    };
    data.users.push(newUser);
    fs.writeFileSync(path.join(__dirname, './db.json'), JSON.stringify(data)); 
    res.status(201).json(newUser);
});

// User login
app.post('/login', (req, res) => {
 
    const user = data.users.find(u => u.email === req.body.email && u.password === req.body.password);
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
