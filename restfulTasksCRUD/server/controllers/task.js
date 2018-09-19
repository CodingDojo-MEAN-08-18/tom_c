const Task = require('mongoose').model('Task');

module.exports = {
    index(req, res) {
        Task.find(req.body)
            .then(tasks => res.json({tasks: tasks}))
            .catch(error => res.json(error));
    },
    create(req, res) {
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(error => res.json(error));
    },
    show(req, res) {
        console.log(req.params.id, ' is show id');
        Task.findById(req.params.id)
            .then(task => res.json(task))
            .catch(error => res.json(error));
    },
    update(req, res) {
        console.log(req.params.id);
        Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(task => res.json(task))
            .catch(error => res.json(error));
    },
    delete(req, res) {
        console.log(req.params.id);
        Task.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(error => res.json(error));
    },
};