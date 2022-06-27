const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const fullVideoDetails = require("../data/video-details.json");

router.use(express.json());

router.get("/videos", (req, res) => {
  console.log(req.body);
  if (req.body) {
    console.log(`Reqest received with a body of : ${req.body}`);


    res.send(videos).status(200);
  } else {
    throw new Error("Request denied");
  }
});

router.get("/video", (req, res) => {
  if (req.body) {
    console.log(`Reqest received with a body of : ${req.body}`);
    // console.log(fullVideoDetails);
      res.send(fullVideoDetails[0]).status(200);
  } else {
    throw new Error("Request denied")
    
  }
});

// router.get("/video:id", (req, res) => {
//   console.log(req.body);
//   if (req.body) {
//     console.log(`Request received with a body of : ${req.body} `);


//     const requestedVideoId = req.params.id;

//     console.log(`Getting requested video with an id of : ${requestedVideoId}`);

//     const requestedVideo = videos.find((video) => requestedVideoId === video.id);
//     //   const formReqVideo = res.json(requestedVideo);
//       console.log(requestedVideo);
//     //   res.send('Hello')
//     res.send(requestedVideo).status(200);
//   }
// });

module.exports = router;
