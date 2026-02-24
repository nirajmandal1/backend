const express = require('express');



const authRouter = require("../router/auth.routes")
const app = express();   // ✅ YOU FORGOT ()

app.use("/api/auth",authRouter)



// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Server is working 🚀");
// });

module.exports = app;   // ✅ Make sure this exists
