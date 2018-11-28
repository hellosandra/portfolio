const express           = require("express");
const Router            = express.Router();
const routes            = require("./main-routes");

Router.get("/", routes.home);
Router.get("/projects", routes.projects);
Router.get("/about-me", routes.aboutMe);

module.exports = Router;
