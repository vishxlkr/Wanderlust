const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");

const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

const multer = require("multer");

const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// index route
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show route
router.get("/:id", wrapAsync(listingController.showListings));

//create route
router.post(
   "/",
   isLoggedIn,
   upload.single("Listing[image]"),
   validateListing,
   wrapAsync(listingController.createListing)
);

//edit route
router.get(
   "/:id/edit",
   isLoggedIn,
   isOwner,
   wrapAsync(listingController.renderEditForm)
);

//update route
router.put(
   "/:id",
   isLoggedIn,
   isOwner,
   upload.single("Listing[image]"),
   validateListing,
   wrapAsync(listingController.updateListing)
);

//delete route
router.delete(
   "/:id",
   isLoggedIn,
   isOwner,
   wrapAsync(listingController.deleteListing)
);

module.exports = router;
