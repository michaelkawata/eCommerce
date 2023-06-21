const jwt = require("jsonwebtoken")

// Middleware function to verify the token present in the request header
const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const authHeader = req.headers.token

  if(authHeader){
      // Extract the actual token from the "Bearer" string
      const token = authHeader.split(" ")[1]

      // Verify the token using JWT and the secret key
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if(err) 
            // If there's an error (like token expired or not signed properly), send a "Token is not valid" message
            res.status(403).json("Token is not valid!")
        // If the token is valid, add the user info to the request object
        req.user = user
        // Pass control to the next middleware function
        next()
      })
  } else{
      // If there's no token in the request header, send a "You are not authenticated" message
      return res.status(401).json("You are not authenticated!")
  }
}

// // Middleware function to verify the token and the user's authorization
// const verifyTokenAndAuthorization = (req, res, next) => {
//   verifyToken(req, res, () => {
//       if (req.user.id === req.params.id || req.user.isAdmin){
//         next()
//       } else {
//         res.status(403).json("You do not have the authorization to do so!")
//       }
//   })
// }

// // Middleware function to verify the token and the user's admin status
// const verifyTokenAndAdmin = (req, res, next) => {
//       verifyToken(req, res, () => {
//       if (req.user.isAdmin){
//         next()
//       } else {
//         res.status(403).json("You do not have the authorization!")
//       }
//   })
// }


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
