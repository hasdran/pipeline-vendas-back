const express = require('express');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(basicAuth({
  //   users: { 'admin': 'Aa123456*+' }
  // }));

  require('../routes/apiRoutes')(app);

  return app;
};