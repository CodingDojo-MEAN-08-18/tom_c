const person1955 = require('../controllers/person');

module.exports = function(app) {
    app.get('/', person1955.index);
    app.get('/new/:name', person1955.create);
    app.get('/remove/:name', person1955.destroy);
    app.get('/:name', person1955.show);
};
