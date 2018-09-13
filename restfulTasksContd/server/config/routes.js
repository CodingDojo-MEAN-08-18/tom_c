const taskController = require('../controllers/task');

module.exports = function(app) {
    app.get('/tasks/', taskController.index);
    app.post('/tasks/', taskController.create);
    app.get('/tasks/:id', taskController.show);
    app.put('/tasks/:id', taskController.update);
    app.delete('/tasks/:id', taskController.delete)
};
