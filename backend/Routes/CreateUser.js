const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "@QEGTUIRatneshSHarma@QEGTUIRatneshSHarma@QEGTUIRatneshSHarma"

// user/add
router.post("/user/add",
  [
    body('email', 'The email must be a valid email address.').isEmail(), // email must be an email
    body('password', 'Password must be at least 5 chars long').isLength({ min: 5 }), // password must be at least 5 chars long
    body('name', 'Name must be at least 5 chars long').isLength({ min: 5 }), // name must be at least 5 chars long
    body('phone', 'Phone must be at least 10 chars long').isLength({ min: 10 }), // phone must be at least 10 chars long
    body('location', 'Please provide your location').not().isEmpty(), // phone must be at least 10 chars long
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        phone: req.body.phone,
        location: req.body.location,
      })

      res.json({ success: true, msg: "User created successfully!" });

    } catch (error) {
      console.log("Error:", error);
      res.json({ success: false });
    }
  })


// user login
router.post("/login",
  [
    body('email', 'The email must be a valid email address.').isEmail(), // email must be an email
    body('password', 'Password must be at least 5 chars long').isLength({ min: 5 }), // password must be at least 5 chars long
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email


    try {
      let userData = await User.findOne({ email });
      let pwdCompare = await bcrypt.compare(req.body.password, userData.password);

      if (!userData) {
        return res.status(400).json({ msg: 'You are entering an incorrect email address.' });
      } else {
        if (!pwdCompare) {
          return res.status(400).json({ msg: 'Your password is invalid. Please try again.' });
        }
        else {
          const data = { user: { id: userData.id } }
          const authToken = jwt.sign(data, jwtSecret)
          return res.json({ success: true, msg: "Login successfully!", authToken: authToken });
        }
      }

    } catch (error) {
      console.log("Error:", error);
      res.json({ success: false });
    }
  })


// // fooditem
// router.post("/fooditems", (req, res) => {
//   try {
//     res.send([global.food_items]);
//   } catch (error) {
//     console.log("two")
//     console.log("Error:", error);
//     res.send('Server Error');
//   }
// })

module.exports = router;