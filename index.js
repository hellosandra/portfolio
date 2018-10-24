// Express
const express           = require("express");
const app               = express();

// Dependencies
const expHBS            = require("express-handlebars").create({defaultLayout: "main"});

// Custom modules
const config            = require("./config/config");
const router            = require("./routes/router");


// Setup view engine
app.engine("hbs", expHBS.engine);
app.set("view engine", "hbs")

// Middleware
app.use(express.static(__dirname + "/public/"))
app.use("/", router);

// Custom Error Pages
// 404
app.use( (req, res) => {
    res.render("404");
})

// 500
app.use( (req, res, next) => {
    res.status(500).render("500");
})

app.listen(process.env.PORT|| config.PORT, () => {
    console.log("Server started on port: ", config.PORT);
})
