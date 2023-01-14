const router = require("express").Router()
const { get_all_user, update_user, delete_user } = require("../controllers/User")

router.get("/", get_all_user)

router.put("/update/:id", update_user)

router.delete("/delete/:id", delete_user)

module.exports = router