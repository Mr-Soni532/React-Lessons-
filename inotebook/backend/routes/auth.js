const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs')  //! npm i bcryptjs
const jwt = require('jsonwebtoken') //! npm i jsonwebtoken
const { body, validationResult } = require("express-validator"); //!npm install --save express-validator
const JWT_SECRET = 'bhup&nder$oniS@DevlOper|'
//Create a User using: POST "/api/auth/createuser". Doesnt require Auth
router.post( 
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email", "Enter a valid Email address").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  // Boiler code from express validation 
  async (req, res) => {
    const errors = validationResult(req);
    //For errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //! using try catch for error handling 
    try {
      // checking for a valid user
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Ops! User Already exsists" });
      }
      // if user doesn't exsist already then this
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
          user: {
              id: user.id
          }
      }
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json(authToken);
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong!")
    }
  }
);
module.exports = router;
