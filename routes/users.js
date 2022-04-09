const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");



router.get("./login", (req, res) => {
  res.render("login");
}); 


// register page

router.get("/register", (req, res) => { 
  res.render("register");
});

// router.post("/register", (req,res) => {
//   console.log(req.body);
// });


router.post("/register",(req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
  .then((user) => console.log(user))
})







// router.post("/register", (req,res) => {
//   const {email, password, password2} = req.body;
//   const errors = [];
//   if (!email || !password || !password2) {
//     errors.push({
//       msg: "please enter all feilds"
//     });
//   }

//   if (password !== password2) {
//     errors.push({
//       msg: "password does not match"
//     });
//   }

//   if (password.length < 3) {
//     errors.push({
//       msg: "password must be more than 3 characteres"
//     });
//   }

//   if (errors.length > 0) {
//     res.render("register", { errors });
//   } 
  
//   else {
//     //validationis ok
//     // check if user is exist or not
//     User.findOne({
//       where: {
//         email: email
//       }
//     })
//       .then(user => {
//         if (user) {
//           errors.push({
//             msg: "email was already used"
//           });
//           res.render("register", { errors });
//         } else {
//           //create user

//           // const newUser = new User({
//           //   email,
//           //   password
//           // });

//           users.create({
//             email: req.body.email,
//             password: req.body.password,
//             // first_name: req.body.first_name,
//             // last_name: req.body.last_name,
//             }).then((user) => res.status(201).send(user)).catch((error) => {
//             console.log(error);
//             res.status(400).send(error);
//         });


//           //hash the password
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(password, salt, (err, hash) => {
//               if (err) throw err;
//               newUser.password = hash;
//               newUser
//                 .save()
//                 .then(user => {
//                   console.log("user created");
//                   req.flash(
//                     "successMessage",
//                     " your account is created ,please login"
//                   );
//                   res.redirect("/users/login");
//                 })
//                 .catch(err => {
//                   console.log(err);
//                   req.flash("ErrorMessage", "There an error");
//                   res.redirect("/users/register");
//                 }); //end new user
//             });
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//});
module.exports = router;