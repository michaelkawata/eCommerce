const User = require("../models/User")
const CryptoJS = require("crypto-js")

// Update User
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    })
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
}

// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted...")
  } catch (err) {
    res.status(500).json(err)
  }
}

// Find User by ID
const findUser = async (req, res) => {
  console.log('findUser', req, res);
  try {
    const user = await User.findById(req.params.id)
    console.log('findUser', user);
    const {
      password,
      ...others
    } = user._doc;

    res.status(200).json(others)
  } catch (err) {
    console.log('findUser = error', err);
    res.status(500).json(err)
  }
}

// Get All Users
const getAllUsers = async (req, res) => {
  const query = req.query.new
  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
}

// Register a new user
const registerUser = async (req, res) => {
  // Extract the user data from the request body
  const { username, password, email } = req.body;

  try {
    // Check if a user with the same username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "Username or email already exists" });
    }

    // Encrypt the password using the secret key
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

    // Create a new user object
    const newUser = new User({
      username: username,
      password: encryptedPassword,
      email: email,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Remove the password field from the response
    const { password, ...others } = savedUser._doc;

    res.status(201).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
  updateUser,
  deleteUser,
  findUser,
  getAllUsers,
  registerUser
}
