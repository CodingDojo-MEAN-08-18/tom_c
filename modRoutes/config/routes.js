const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app) { 
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/quotes', function(req, res) {
        Quote.find({}, function(err, quotes) {
            if (err) {
                console.log(err);
                for (var key in err.errors) {
                    req.flash('quoteErr', err.errors[key].message);
                }};
                res.render('quotes', { quotes: quotes });
        });
    });

    app.post('/quotes', function(req, res) {
        var newQuote = new Quote(req.body);
        newQuote.save(function(err) {
            if (err) {
                console.log(err);
                for (var key in err.errors) {
                    req.flash('quotes', err.errors[key].message);
                }};
                res.redirect('/quotes');
        });
    });
};