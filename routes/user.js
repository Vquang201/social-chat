const UserController = require("../controller/UserController");
const router = require('express').Router()

router.get("/", UserController.getAnUser)
router.get("/friends/:userId", UserController.getFriends)
router.put("/:id", UserController.updateUser)
router.put("/:id/follow", UserController.followAnUser)
router.put("/:id/unfollow", UserController.unFollowAnUser)
router.delete("/:id", UserController.deteleUser)

module.exports = router