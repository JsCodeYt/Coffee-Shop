const router = require("express").Router()
const {register, login, jwt_get} = require("../controllers/Auth")

router.post('/register', register)
router.post('/login', login)
router.get('/jwtget', jwt_get)

module.exports = router