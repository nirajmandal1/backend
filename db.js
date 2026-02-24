const mongoose = require("mongoose");

function connectTODB() {
  mongoose.connect(process.env.MANGO_URI)
    .then(() => {
      console.log("server is connected to DB");
    })
    .catch(err => {
      console.log("error connecting to DB", err);
      process.exit(1);
    });
}

module.exports = connectTODB;   // ✅ THIS WAS MISSING
