const express           = require("express");
const Router            = express.Router();
const routes            = require("./main-routes");

Router.get("/", routes.home);
Router.get("/projects", routes.projects);

module.exports = Router;
