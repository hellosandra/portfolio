const messageModel      = require("../models/messages");
const url               = require("url");

/**
 * GET Requests
 */

exports.home            = function (req, res) {
    res.render("home");
}

exports.projects        = function (req, res) {
    res.render("projects");
}

exports.aboutMe         = function(req, res) {
    res.render("about-me");
}

/**
 *  POST Requests
 */

exports.getInTouch      = function(req, res) {
    const formData      = {
        firstName       : req.body.firstName,
        email           : req.body.email,
        message         : req.body.message
    }

    messageModel.getInTouch(formData);
    res.redirect(303, "/")
}
