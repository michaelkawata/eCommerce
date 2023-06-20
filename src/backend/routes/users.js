const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
   verifyTokenAndAdmin
 } = require("./verifyToken");

router.post('/register', userController.register);
router.post('/login', verifyTokenAndAuthorization, userController.login);

module.exports = router;
