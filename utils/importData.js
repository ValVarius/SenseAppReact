require("dotenv").config({ path: "./config.env" });
// const fs = require("fs");
const Menu = require("../models/menu");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/senseappDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));
const { menuStart } = require("./menuStart.js");
const importData = async () => {
  try {
    await Menu.create(menuStart);
    console.log("Data Successfully imported 👌");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Menu.deleteMany({});
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
