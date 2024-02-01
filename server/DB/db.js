const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
      })
      .then((data) => {
        console.log(
          `mongodb is connected with server: ${data.connection.host}`
        );
      });
  } catch (error) {
    console.log(`mongoDB No connected`, error);
  }
};

module.exports = connectDatabase;
