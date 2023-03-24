"use strict";

const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

// Constants
dotenv.config({ path: "./env/config.env" });
const PORT = process.env.PORT || 3030;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});

const healthcheck1 = router.route("/livez").get(async (req, res, next) => {
    res.status(200).send({ success: true, healthcheck: "1" });
});

const healthcheck2 = router.route("/readyz").get(async (req, res, next) => {
    res.status(200).send({ success: true, healthcheck: "2" });
});

app.use("/", router);
app.use("/", router);

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
