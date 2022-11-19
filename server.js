const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const origins = [
  "http://localhost:3000", // Development
  
];

app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/senseappDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const db = require("../models");
// db.Meal.collection.insertMany(bookSeed)
