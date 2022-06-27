const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const fullVideoDetails = require("../data/video-details.json");

router.use(express.json());

router.get("/videos", (req, res) => {
  console.log(req.body);
  if (req.body) {
    console.log(`Reqest received for a video list`);

    res.send(fullVideoDetails).status(200);
  } else {
    throw new Error("Request denied");
  }
});

router.get("/video", (req, res) => {
  if (req.body) {
    console.log(`Reqest received for a first video`);
    // console.log(fullVideoDetails);
    res.send(fullVideoDetails[0]).status(200);
  } else {
    throw new Error("Request denied");
  }
});

router.get("/video/:id", (req, res) => {
  if (req.body) {
    console.log(req.params.id);
    console.log(`Request received for a chosen video id`);

    const requestedVideoId = req.params.id;
    console.log(requestedVideoId);

    console.log(`Getting requested video with an id of : ${requestedVideoId}`);

    const requestedVideo = fullVideoDetails.filter((video) => requestedVideoId === video.id);

    console.log(requestedVideo);
    res.send(requestedVideo).status(200);
  }
});

module.exports = router;
