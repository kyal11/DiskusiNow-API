const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth.routes");
const allRoutes = require("./src/routes/index.routes")
dotenv.config();

const app = express();

const appPort = process.env.APP_PORT
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes)
app.use(allRoutes)
app.use("/", (req, res) => {
    res.json("hello")
})
app.listen(appPort , () => {
    console.log(`Server running in htpp://127.0.0.1:${appPort}`)
})