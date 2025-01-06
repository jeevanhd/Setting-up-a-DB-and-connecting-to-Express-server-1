const urls = process.env.MONGODB_URI;

const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose
    .connect(urls)
    .then((data) => {
      console.log(
        `Database is connected Successfully: ${data.connection.host}`
      );
    })
    .catch((err) => {
      console.log(`DataBase connection failed: ${err}`);
    });
};

module.exports = connectDatabase;
