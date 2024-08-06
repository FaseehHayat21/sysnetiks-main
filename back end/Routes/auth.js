const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const fetchuser = require('../middleware/fetchuser');
var jwt = require("jsonwebtoken");
const JWT_SECRET = "faseeh123";
const { body, validationResult } = require("express-validator");

router.post(
    "/register",
    [
      body("password").isLength({ min: 3 }),
      body("email").isEmail(),
  
    ],
    async (req, res) => {
      let success = false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          success = false
          return res.status(400).json({ error: "Sorry this part already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        
        secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
          password: secPass,
          name: req.body.name,
          email: req.body.email,
          role: req.body.role
        });
  
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        let userRole = req.body.role;
        res.json({ success, authToken, userRole });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some eroor occured" });
      }
    }
  );

// 

  router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      let userRole = user.role;
      
      res.json({ success, authtoken, userRole});
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  });
  //get logined user details
  router.get('/getuser',   async (req, res) => {
    try {
      const user = await User.find()
      res.send(user)

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

  router.delete('/deleteUser/:id',  async (req, res) => {
    try {
      
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("Not Found") }
        user = await User.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Item has been deleted", user: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
  module.exports = router;