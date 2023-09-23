const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User")
const { isUserAuthenticated } = require("../middleware/verification");
require('dotenv').config(); 
const router = express.Router();
const SECRET = process.env.JWT_SECRET

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Not Authorized",
    });
  }
});


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.CLIENT_URL}/signin`);
});

// Google authentication route
router.get("/google", passport.authenticate("google", ["profile", "email"]));

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.CLIENT_URL}/success`, 
    failureRedirect: `${process.env.CLIENT_URL}/signup`,  
  }),
  (req, res) => {
   
    res.send('Thanks for signing in');
  }
);

// GitHub authentication route
router.get("/github", passport.authenticate("github"));

// GitHub callback route
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: `${process.env.CLIENT_URL}/success`, 
    failureRedirect: `${process.env.CLIENT_URL}/signup`,   
  }),
  (req, res) => {
    res.send('Thanks for signing in with GitHub');
  }
);

//Normal Signup and Signin routes
router.post('/signup', async (req, res) => {
  const { email, password,firstName , lastName } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const fullname = firstName + " " + lastName;
    const newUser = new User({ email, password,fullname });
    await newUser.save();
    const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email,password });
  if (user) {
    const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
    const username = user.fullname;
    res.json({ message: 'Logged in successfully', token,username  });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

router.get("/user", isUserAuthenticated, (req, res) => {
  console.log(" user from route: " +req.user)
  console.log(" req from route: " +JSON.stringify(req))
  res.json(req.user);
});

module.exports = router;

