const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
   res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
   try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);

      req.login(registeredUser, (err) => {
         if (err) {
            return next(err);
         }
         req.flash("success", "Welcome to Wanderlust!");
         return res.redirect("/listings");
      });
   } catch (err) {
      req.flash("error", err.message);
      return res.redirect("/signup");
   }
};

module.exports.renderLoginForm = (req, res) => {
   res.render("users/login.ejs");
};

module.exports.login = (req, res) => {
   req.flash("success", "Welcome back to Wanderlust!");
   res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout = (req, res, next) => {
   req.logout((err) => {
      if (err) {
         return next(err);
      }
      req.flash("success", "You are Logged OUT!");
      res.redirect("/listings");
   });
};
