const express = require("express")
const router = express.Router()
const {authenticateUser} = require("../middleware/authentication")
const { CreateReview, getAllReview, getSingleReview, updateReview, deleteReview } = require("../controllers/reviewController")

router.route("/").post(authenticateUser, CreateReview).get(getAllReview)

router.route("/:id").get(getSingleReview).patch(authenticateUser, updateReview).delete(authenticateUser, deleteReview)

module.exports = router