const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const appPort = process.env.APP_PORT

app.listen(appPort , () => {
    console.log(`Server running in htpp://127.0.0.1:${appPort}`)
})