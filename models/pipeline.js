const db = require('./dbConection');

// const Pipeline = function (client) {
//   this.id = client.id;
//   this.name = client.name;
//   this.email = client.email;
// }

// Pipeline.getAll = result => {
//   db.then(connection => {
//     connection.query({ sql: "SELECT * FROM Clientes" })
//       .then(rows => result(null, rows))
//       .catch(err => result(null, err));
//     connection.destroy;
//   }).catch(err => result(null, "Not connected due to error:" + err));
// }