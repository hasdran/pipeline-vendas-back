module.exports = app => {
    const controller = require('../controllers/pipelineController');
  
    app.get('/', controller.findAll);
  
  }