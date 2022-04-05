const mongoose = require("mongoose");

const url =
  "mongodb://quora:1234@cluster0-shard-00-00.so0ea.mongodb.net:27017,cluster0-shard-00-01.so0ea.mongodb.net:27017,cluster0-shard-00-02.so0ea.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-ikeble-shard-0&authSource=admin&retryWrites=true&w=majority";
//   "mongodb+srv://quora:1234@cluster0.so0ea.mongodb.net/quora-clone-mern?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected succesfully");
    })
    .catch((error) => console.log("Error: ", error));
};
