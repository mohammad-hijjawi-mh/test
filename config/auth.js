module.exports = {
  isAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    req.flash("errorMessage", " you dont have permission to access this page");
    res.redirect("/users/login");
  }
};
