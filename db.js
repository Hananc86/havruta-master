var mysql = require('mysql')
console.log(process.env.DB_HOST);
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cohen100',
  database : 'master'
  // socketPath: "/var/run/mysqld/mysqld.sock"
})

connection.connect(function (error) {
  if(error) {
    console.log('error');
  }else {
    console.log('connected');
  }
});

connection.query('SELECT * from rooms', function (error, results, fields) {
  if (!!error) {
    console.log(error);
  }else {
    console.log(error);
  }
  // connected!
});

module.exports = connection;