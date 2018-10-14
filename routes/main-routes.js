const express           = require("express");
const Router            = express.Router();

// HOME PAGE
Router.get("/", (req, res) => {
    res.render("home")
});

module.exports = Router;
