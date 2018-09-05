const taskController = require('../controllers/task');

module.exports = function(app) {
    app.get('/', taskController.index);
    app.post('/', taskController.create);
    app.get('/:id', taskController.show);
    app.put('/:id/update', taskController.update);
    app.delete('/:id/delete', taskController.delete)
};
