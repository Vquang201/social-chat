const PostController = require('../controller/PostController');
const router = require('express').Router()
const uploadCloudinary = require('../middleware/uploadMiddleware')

// img => field in db
router.post("/api/upload", uploadCloudinary.single("img"), PostController.uploadFile)
//create a post
router.post("/", uploadCloudinary.single("img"), PostController.createPost)
//update a post
router.put("/:id", PostController.updatePost)
//delete a post
router.delete("/:id", PostController.deletePost)
//like / dislike a post
router.put("/:id/like", PostController.updateLikeOrDislike)
//get a post
router.get("/:id", PostController.getAPost)
//get timeline posts
router.get("/timeline/:userId", PostController.getTimeLinePost)
//get user's all posts
router.get("/profile/:username", PostController.getAllPostOfUser)


module.exports = router