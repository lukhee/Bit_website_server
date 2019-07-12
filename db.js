const mysql = require('mysql');

// mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bitbydream"
});

con.connect(function (err) {
    if (err) {
        console.log("no connection")
        throw err
    }
    console.log("mysql is Connected!");
});

module.exports = con