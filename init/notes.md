✈️ Wanderlust App - API & Data Flow Notes
This document outlines the end-to-end data flow for the core features of the Wanderlust application, detailing client-side actions, backend routes, and database interactions based on the provided source code.

🔑 User Authentication
User Signup

Client: Fills out a form with a username, email, and password, then submits a POST request to /signup.

Backend:

Route: user.js → POST /signup.

Controller: userController.signup.

Creates a new user instance and registers it using Passport.js.

On successful creation, the user is automatically logged in and redirected to the listings page.

On failure, a flash message is displayed, and the user is redirected to the signup form.

User Login

Client: Enters a username and password into a form and sends a POST request to /login.

Backend:

Route: user.js → POST /login.

Middleware: Uses saveRedirectUrl to store the intended URL and passport.authenticate("local") for authentication.

Controller: userController.login.

If authentication is successful, the user is redirected to the page they were trying to access or to the main listings page.

If authentication fails, a flash message is displayed, and the user is redirected back to the login page.

User Logout

Client: Clicks on the "Log out" link, which triggers a GET request to /logout.

Backend:

Route: user.js → GET /logout.

Controller: userController.logout.

Logs the user out and displays a flash success message before redirecting to the listings page.

🏡 Listing Management (CRUD)
Get All Listings

Client: Navigates to the home page, which sends a GET request to /listings.

Backend:

Route: listing.js → GET /.

Controller: listingController.index.

Fetches all listings from the database and renders the index page.

Get a Single Listing

Client: Clicks on a listing card, triggering a GET request to /listings/:id.

Backend:

Route: listing.js → GET /:id.

Controller: listingController.showListings.

Fetches the specific listing, including associated reviews, and renders the show page.

Create a New Listing

Client: Fills out a form with listing details (title, description, price, country, location) and uploads an image. The form submits a

POST request to /listings.

Backend:

Route: listing.js → POST /.

Middleware: isLoggedIn ensures the user is authenticated.

upload.single("Listing[image]") handles the file upload using Multer and a configured cloud storage service.

validateListing uses Joi to validate the form data against the listingSchema.

Controller: listingController.createListing.

Saves the new listing to the database with the uploaded image's URL.

On success, a flash message is displayed, and the user is redirected to the new listing's page.

Edit a Listing
Client: Clicks the "Edit" button on a listing's show page. This sends a

GET request to /listings/:id/edit to retrieve the existing data. After making changes, the user submits a

POST request with a \_method=PUT override to /listings/:id.

Backend:

Route: listing.js → GET /:id/edit and PUT /:id.

Middleware: isLoggedIn and isOwner ensure that only the authenticated owner can access and update the listing.

upload.single("Listing[image]") handles the new image upload.

validateListing validates the updated data.

Controller: listingController.renderEditForm (GET) and listingController.updateListing (PUT).

Updates the listing details in the database.

On success, a flash message is displayed, and the user is redirected to the updated listing's show page.

Delete a Listing

Client: Clicks the "Delete" button on a listing's show page, which sends a POST request with a \_method=DELETE override to /listings/:id.

Backend:

Route: listing.js → DELETE /:id.

Middleware: isLoggedIn and isOwner ensure only the owner can delete the listing.

Controller: listingController.deleteListing.

Deletes the listing and all associated reviews from the database.

A flash success message is displayed, and the user is redirected to the main listings page.

📝 Review Management
Add a Review

Client: Fills out a review form with a rating and comment on a listing's show page, then submits a POST request to /listings/:id/reviews.

Backend:

Route: review.js → POST /.

Middleware: isLoggedIn ensures the user is authenticated.

validateReview uses Joi to validate the rating and comment against the reviewSchema.

Controller: reviewController.createReview.

Saves the new review and associates it with the specific listing.

On success, a flash message is displayed, and the user is redirected back to the listing's show page.

Delete a Review

Client: Clicks the "Delete" button on a review, which sends a POST request with a \_method=DELETE override to /listings/:id/reviews/:reviewId.

Backend:

Route: review.js → DELETE /:reviewId.

Middleware: isLoggedIn and isReviewAuthor ensure only the review's author can delete it.

Controller: reviewController.deleteReview.

Deletes the review from the database.

A flash success message is displayed, and the user is redirected back to the listing's show page.

🗂️ General Data Structures
Listing Schema

title: String, required.

description: String, required.

location: String, required.

country: String, required.

price: Number, required, minimum 0.

image: String (URL), can be null.

owner: Reference to the User model.

reviews: Array of references to the Review model.

Review Schema

rating: Number, required, between 1 and 5.

comment: String, required.

author: Reference to the User model.

<br>

🗺️ Wanderlust API - Endpoint Summary
This document provides a concise overview of all available API endpoints for the Wanderlust application. The API is divided into Listings Routes, Reviews Routes, and User Routes.

🏠 Listings Routes (/listings)
Method Endpoint Description
GET /
Get all listings (homepage).

GET /new
Render form to create a new listing.

POST /
Create a new listing.

GET /:id
Get a single listing by ID.

GET /:id/edit
Render form to edit a listing.

PUT /:id
Update a listing by ID.

DELETE /:id
Delete a listing by ID.

Export to Sheets
✍️ Reviews Routes (/listings/:id/reviews)
Method Endpoint Description
POST /
Add a new review to a listing.

DELETE /:reviewId
Delete a specific review.

Export to Sheets
👤 User Routes (/)
Method Endpoint Description
GET /signup
Render signup form.

POST /signup
Register a new user.

GET /login
Render login form.

POST /login
Authenticate user login.

GET /logout
Log out the current user.
