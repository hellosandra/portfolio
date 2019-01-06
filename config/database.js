const Sequelize     = require("sequelize");
const options       = {
    user            : "ntsoele",
    pass            : "50517",
    host            : "127.0.0.1",
    PORT            : "5432",
    database        : "hello_sandra"
}
const {user, pass, host, PORT, database} = options;
const URL           = user + ":" + pass + "@" + host + ":" + PORT + "/" + database;
const connection    = new Sequelize("postgres://" + URL)

// Connection test
// connection
//     .authenticate()
//     .then(() => {
//     console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//     console.error('Unable to connect to the database:', err);
//     });

exports.Sequelize   = Sequelize;
exports.connection  = connection;
