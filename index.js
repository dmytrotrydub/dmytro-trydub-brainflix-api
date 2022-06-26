const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/videos");

dotenv.config();
console.log(`Connecting to port ${process.env.PORT}`);

app.use(express.json());
app.use(cors());

app.use("/", routes);

const listener = app.listen(process.env.PORT, () => {
  console.log(
    `Listening of port of : ${process.env.PORT} on localhost ${process.env.URL}${process.env.PORT}`
  );
});
