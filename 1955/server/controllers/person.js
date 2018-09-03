const Person = require('mongoose').model('Person');

module.exports = {
    index(req, res) {
        Person.find({})
            .then(people => res.json(people))
            .catch(error => res.json(error));
    },
    show(req, res) {
        Person.findOne(req.params)
            .then(person => {
                res.json(person ? person : 'Person not found');
            })
            .catch(error => res.json(error));
    },
    create(req, res) {
        Person.create(req.params)
            .then(person => res.json(person))
            .catch(error => res.json(error));
    },
    destroy(req, res) {
        Person.remove(req.params)
            .then(removed => res.json(removed))
            .catch(error => res.json(error));
    },
};