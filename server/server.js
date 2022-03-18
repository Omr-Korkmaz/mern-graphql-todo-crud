const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");
const cors = require("cors");

const dbUrl = config.dbUrl;
const routes = require('./routes/TodoRoute');

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(dbUrl, (err) => {
    if (err) console.log(err);
  });

app.use(routes);

app.listen(PORT, () => console.log('Server running on port ' + PORT));