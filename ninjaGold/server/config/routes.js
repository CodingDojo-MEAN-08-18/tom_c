const goldController = require('../controllers/gold');

module.exports = function(app) {
    app.get('/', goldController.index);
    app.post('/golds/', goldController.create);
    app.get('/golds/:id', goldController.show);
    app.put('/golds/:id', goldController.update);
    app.delete('/golds/:id', goldController.delete)
};