const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");

const {
   validateReview,
   isLoggedIn,
   isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//reviews
//post route
router.post(
   "/",
   isLoggedIn,
   validateReview,

   wrapAsync(reviewController.createReview)
);

//delete route

router.delete(
   "/:reviewId",
   isLoggedIn,
   isReviewAuthor,

   wrapAsync(reviewController.deleteReview)
);

module.exports = router;

// listing/:id/reviews/---------
