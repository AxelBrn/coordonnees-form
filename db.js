var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'formulaire'
});

connection.connect(err => {
  if (err) throw err;
  console.log("Successfully connected to the development database.");
});

module.exports = connection;