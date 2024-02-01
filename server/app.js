const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));


// Route imports
// const user = require("./routes/user");
// const post = require("./routes/Post");

// app.get('/',(req, res) => {
//   res.send('Threads is running ...')
// })



// app.use("/api/v1", user);
// app.use("/api/v1", post);

module.exports = app;
