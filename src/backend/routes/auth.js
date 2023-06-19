const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //replaced from "req.body.password"
    //PASS_SEC from .env
    //encrypting password
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//LOGIN

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   console.log('Request received with:', req.body);

//   try {
//     // Find the user by username
//     const user = await User.findOne({ username });

//     console.log('User found:', user);

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username or password.' });
//     }

//     // Compare the inputted password with the hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     console.log('Passwords match:', passwordMatch);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Invalid username or password.' });
//     }

//     console.log('JWT Secret:', process.env.JWT_SEC);

//     //JWT - JSON WEB TOKEN
//     const accessToken = jwt.sign({
//       id: user._id,
//       isAdmin: user.isAdmin,
//     }, process.env.JWT_SEC, {
//       expiresIn: "3d"
//     })

//     console.log('Access token:', accessToken);

//     //showing everything but password in mongodb
//     const {
//       password: userPassword,
//       ...others
//     } = user._doc;

//     console.log('Response data:', {...others, accessToken});

//     return res.status(200).json({...others, accessToken});

//   } catch (err) {
//     console.log('Error:', err);
//     return res.status(500).json(err);
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
        username: req.body.username
      })

      !user && res.status(401).json("Username or Password is not correct!")

    //decrypting password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password, process.env.PASS_SEC
    )

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    OriginalPassword !== req.body.password && res.status(401).json("Username or Password is not correct!")

    //JWT - JSON WEB TOKEN
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SEC, {
      //JWT expires in 3 days and user will have to login again
      expiresIn: "3d"
    })

    //showing everything but password in mongodb
    //._doc is used only for mongo
    const {
      password,
      ...others
    } = user._doc;

    res.status(200).json({...others, accessToken})

  } catch (err) {
    res.status(500).json(err)
  }

})



module.exports = router
