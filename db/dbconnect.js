const mongoose = require("mongoose");

async function dbconnection() {
  try {
    const conn = await mongoose.connect(process.env.DBURL!=undefined?process.env.DBURL:'mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`Mongoose connected successfully:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}
exports.dbconnect = dbconnection();
