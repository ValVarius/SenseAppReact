const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const path = require("path");

const fileUpload = require("express-fileupload");
const MongoStore = require("connect-mongo")(session);

const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

const origins = [
  "http://localhost:3000", // Development
  "https://sensapp.herokuapp.com", //Production
];

app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "client/build")));
  // app.use(express.static("client/build"));

  // Anything that doesn't match the above, send back index.html
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // });
} else {
  app.get("/", (req, res) => {
    res.send("API LISTENING");
  });
}

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 12 * 60 * 60,
    }),
  })
);

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/senseappDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
