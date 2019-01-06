// Express
const express           = require("express");
const app               = express();

// Dependencies
const expHBS            = require("express-handlebars").create({
    defaultLayout       : "main",
    helpers             : {
        section         : function (name, options) {
            this._section       = {};
            this._section[name] = options.fn(this)
        }
    }
});
const bodyParser        = require("body-parser");

// Custom modules
const config            = require("./config/config");
const router            = require("./routes/router");
const DB                = require("./config/database");


// Setup view engine
app.engine("hbs", expHBS.engine);
app.set("view engine", "hbs")

// Middleware
// Disable "x powered by" header
app.disable('x-powered-by');
// Set directory for static files
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: true}));
// Log HTTP method as well as requested URL
app.use((req, res, next)=>{
    console.log(req.method + ": " + req.url);
    next();
});
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
