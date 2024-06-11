const express = require("express");
const { register, login } = require("../controllers/superAdmin/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middleware/authenticate");
const router = express.Router();
router.post("/register" , checkAuthorizationHeaders,authorizeUser("cando10"), register);


router.post("/login",login);


module.exports = router;

