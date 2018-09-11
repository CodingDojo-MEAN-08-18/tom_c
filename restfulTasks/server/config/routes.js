const taskController = require('../controllers/task');

module.exports = function(app) {
    app.get('/tasks/', taskController.index);
    app.post('/tasks/', taskController.create);
    app.get('/task/:id', taskController.show);
    app.put('/task/:id/update', taskController.update);
    app.delete('/task/:id/delete', taskController.delete)
};
