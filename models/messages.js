const database                  = require("../config/database");
const {Sequelize, connection}   = database;

const User          = connection.define('messages', {
    firstName       : {
        type        : Sequelize.STRING
    },
    email           : {
        type        : Sequelize.STRING
    },
    message         : {
        type        : Sequelize.STRING
    }
});

module.exports.getInTouch   = function (formData, callback) {
    const {firstName, email, message} = formData;

    User.sync({force: true}).then(() => {
        return User.create({
            firstName   : firstName,
            email       : email,
            message     : message
        })

        // callback(err);
    })
}
