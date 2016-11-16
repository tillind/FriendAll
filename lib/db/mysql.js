var express = require('express');
// connect to Mysql
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'testnode'
});
connection.connect();
connection.query('SELECT * from utilisateur', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
connection.end();
// view engine setup