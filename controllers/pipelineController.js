// const Pipeline = require('../models/pipeline')
var sql = require("mssql");
// var Connection = require('tedious').Connection;

const config = {
    user: 'teste',
    password: '123',
    server: '192.168.100.116',
    database: 'ObaOba',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instanceName: 'SQLEXPRESS'
    },
    port: 1433
}

async function getPipes() {
    try {
        let pool = await sql.connect(config);
        let pipeline = pool.request().query("SELECT * FROM pipes");
        return pipeline.name;
    } catch (error) {
        console.log(error);
    }
}

exports.findAll = async (req, res) => {
    getPipes().then(result => {
        console.log(result);
    })
    res.status(200).send("Hello World");
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