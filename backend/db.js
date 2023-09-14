const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";
mongoose.set("strictQuery", false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongoose Successfully");
  });
};
module.exports = connectToMongo;
