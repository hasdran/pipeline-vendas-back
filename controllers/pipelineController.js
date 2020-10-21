// const Pipeline = require('../models/pipeline')
var sql = require("mssql");
var Connection = require('tedious').Connection;

// var config = {
//   password: 'Succ3$$2019',
//   database: 'Cattalini',
//   stream: false,
//   options: {
//     enableArithAbort: true,
//     encrypt: true
//   },
//   port: 1433,
//   user: 'cattaliniuser',
//   server: 'http://antartico'
// };

// var config = {
//   server: '192.168.16.14',  //update me
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'cattaliniuser', //update me
//       password: 'Succ3$$2019'  //update me
//     }
//   },
//   options: {
//     // If you are on Microsoft Azure, you need encryption:
//     encrypt: true,
//     database: 'Cattalini'  //update me
//   }
// };

// var connection = new Connection(config);
// connection.on('connect', function (err) {
//   // If no error, then good to proceed.
//   console.log("Connected");
// })
// connect to your database


exports.findAll = (req, res) => {
    var jsonPerson = '{"first_name":"billy", "age":23}';
    var personObject = JSON.parse(jsonPerson);
    res.status(200).send(personObject);
}

// exports.findAllBKP = (req, res) => {
//   Pipeline.getAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving clients."
//       });
//     else res.status(200).send(data);
//   });
// }

// exports.register = (req, res) => {
//   const client = req.body;

//   Client.insert(client, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while register client."
//       });
//     else res.status(200).send(data);
//   });
// }

// exports.update = (req, res) => {
//   const client = req.body;

//   Client.update(client, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while register client."
//       });
//     else res.status(200).send(data);
//   });
// }

// exports.delete = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   const client = req.body;

//   Client.delete(client, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while register client."
//       });
//     else res.status(200).send(data);
//   });
// }