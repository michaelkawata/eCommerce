const jwt = require("jsonwebtoken")

// Verify Token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!")
      req.user = user
      next()
    })
  } else {
    //401 - not authenticated
    return res.status(401).json("You are not authenticated!")
  }
}

// Verify Token and Authorization
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json("You do not have the authorization to do so!")
    }
  })
}

// Verify Token and Admin Authorization
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json("You do not have the authorization to do so!")
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
}
