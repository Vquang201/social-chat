const AuthController = require("../controller/AuthController");
const router = require('express').Router()

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)

module.exports = router
