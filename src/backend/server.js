const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/users');

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


app.use('/', userRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});