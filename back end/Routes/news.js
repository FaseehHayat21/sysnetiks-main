const express = require("express");
const User = require("../models/User");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

const { body, validationResult } = require("express-validator");
const News = require("../models/News");


router.post(
    "/addNews",
    async (req, res) => {
      let success = true;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        let news = await News.findOne({ text: req.body.text });
       
        news = await News.create({
          text: req.body.text,
          link: req.body.link,
          
        });
  
        const data = {
          news: {
            id: news.id,
          },
        };
  
        res.json({ success });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some eroor occured" });
      }
    }
  );
  router.get('/fetchNews',   async (req, res) => {
    try {
      const news = await News.find()
      res.send(news)
        
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })




  module.exports = router;