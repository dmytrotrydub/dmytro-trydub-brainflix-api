const express = require("express");
const router = express.Router();
const fullVideoDetails = require("../data/videos.json");
const { v4: uuidv4 } = require("uuid");
const { fsyncSync } = require("fs");


router.use(express.json());

const fullRequestHandler = (req, res) => {
  console.log(req.body);
  if (req.body) {
    console.log(`Reqest received for a video list`);

    res.send(fullVideoDetails).status(200);
  } else {
    throw new Error("Request denied");
  }
};
router.get("/videos", fullRequestHandler);

const singleVideorequestHandler = (req, res) => {
  if (req.body) {
    console.log(`Reqest received for a first video`);

    res.send(fullVideoDetails[0]).status(200);
  } else {
    throw new Error("Request denied");
  }
};
router.get("/video", singleVideorequestHandler);

const requestedVideoById = (req, res) => {
  if (req.body) {
    console.log(req.params.id);
    console.log(`Request received for a chosen video id`);

    const requestedVideoId = req.params.id;
    console.log(requestedVideoId);

    console.log(`Getting requested video with an id of : ${requestedVideoId}`);

    const requestedVideo = fullVideoDetails.find((video) => requestedVideoId === `:${video.id}`);

    console.log(requestedVideo);
    // res.send("connection established").status(200);
    //   const mutatedVideo = res.json(requestedVideo)
    res.send(requestedVideo).status(200);
  } else {
    throw new Error("Request denied");
  }
};

router.post("/videoupload", (req, res) => {
  console.log(req.body);

  const videoTitle = req.body.tile;
  const videoDescription = req.body.description;
    const date = new Date();
    const newId = uuidv4();

  const newVideo = {
    title: videoTitle,
    channel: "Dmytro Trydub",
    image: "https://science.howstuffworks.com/nature/climate-weather/atmospheric/sky.htm",
    description: videoDescription,
    views: 17000000000000,
    likes: 1,
    duration: "60:00",
    video: "https://www.youtube.com/watch?v=rTLmeKV7j10&t=1s",
      timestamp: date,
    id: uuidv4(),
  };
    
    fs.writeFileSync(`../data/videos.json`, newVideo).JSON.stringify();
    res.send(newVideo).status(200).end();
    

  const postedVideo = {};
});

router.get("/videos/:id", requestedVideoById);

module.exports = router;
