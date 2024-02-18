import ReviewsCTRL from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCTRL.apiGetReviews)
router.route("/new").post(ReviewsCTRL.apiPostReview)
router.route("/:id")
    .get(ReviewsCTRL.apiGetReview)
    .put(ReviewsCTRL.apiUpdateReview)
    .delete(ReviewsCTRL.apiDeleteReview)

export default router 