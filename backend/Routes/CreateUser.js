const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser",
  body('email', 'Email must be an email').isEmail(), // email must be an email
  body('password', 'Password must be at least 5 chars long').isLength({ min: 5 }), // password must be at least 5 chars long
  body('name', 'Name must be at least 5 chars long').isLength({ min: 5 }), // name must be at least 5 chars long
  body('phone', 'Phone must be at least 10 chars long').isLength({ min: 10 }), // phone must be at least 10 chars long
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        location: req.body.location,
      })

      res.json({ success: true });

    } catch (error) {
      console.log("Error:", error);
      res.json({ success: false });
    }
  })

module.exports = router;