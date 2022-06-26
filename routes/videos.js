const express = require("express");
const router = express.Router();
const videos =require("../data/videos.json")


router.use(express.json());


router.get("/home", (req, res) => {
console.log(req);
  if (req.body) {
       console.log(`Reqest received with a body of : ${req.body}`);
    res.status(200);
    res.send(videos.json());
  } else {
      throw new Error('Request denied');
  }
});



module.exports = router;