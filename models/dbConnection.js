const sqlServer = require("mssql");
var conn = require('tedious').Connection;

var config = {
  password: '123',
  database: 'ObaOba',
  stream: false,
  options: {
    enableArithAbort: true,
    encrypt: true
  },
  port: 1433,
  user: 'teste',
  server: 'http://192.168.100.116'
};

var connection = new Connection(config);
connection.on('connect', function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
})

module.exports = conn;

// 'sqlsrv' => [
//   'driver' => 'sqlsrv',
//   'host' => env('DB_HOST', '192.168.16.14'),
//   'port' => env('DB_PORT', '1433'),
//   'database' => env('DB_DATABASE', 'Cattalini'),
//   'username' => env('DB_USERNAME', 'cattaliniuser'),
//   'password' => env('DB_PASSWORD', 'Succ3$$2019'),
//   'charset' => 'utf8',
//   'prefix' => '',
// ],