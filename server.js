require("dotenv").config();

const app = require("./src/app.js");
const connectTODB = require("./config/db");

app.listen(3000, () => {
    console.log("server is running on the port 3000")
});