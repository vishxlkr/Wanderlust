const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const flash = require("connect-flash");
const userRouter = require("./routes/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, "/public")));

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const databaseURL = process.env.MONGODB_URI;
async function main() {
   await mongoose.connect(databaseURL);
}

main()
   .then(() => {
      console.log("connected to DB.");
   })
   .catch((err) => {
      console.log(err);
   });

const store = MongoStore.create({
   mongoUrl: databaseURL,
   crypto: {
      secret: "mysupersecret",
   },
   touchAfter: 24 * 3600,
});

store.on("error", () => {
   console.log("ERROR in MONGO SESSION STORE", err);
});

//sessions
const sessionOptions = {
   store,
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: true,
   cookie: {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
   },
};

app.use(session(sessionOptions));
app.use(flash()); // use before routes

app.use(passport.initialize());

app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
   res.locals.success = req.flash("success");
   res.locals.error = req.flash("error");
   res.locals.currUser = req.user;

   next();
});
////////////////////////////////////////////////////////////////
//routes

app.get("/", (req, res) => {
   res.redirect("/listings");
});

app.get("/demouser", async (req, res) => {
   let fakeuser = new User({
      email: "vishal@gmail.com",
      username: "vishal",
   });

   let registeredUser = await User.register(fakeuser, "helloworld");
   res.send(registeredUser);
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

//if new route is entered and does not matches the abobe routes
app.all("*", (req, res, next) => {
   next(new ExpressError(404, "Page Not Found"));
});

//error handling middleware
app.use((err, req, res, next) => {
   const { status = 500, message = "Something went wrong" } = err;
   res.render("error.ejs", { message });
   //   res.status(status).send(message);
});

app.listen(PORT, () => {
   console.log(`listening to port ${PORT}.`);
});
