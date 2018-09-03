const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const port = process.env.PORT || 8000;
const flash = require('express-flash');

const app = express();
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(flash());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secretHere',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

mongoose.connect('mongodb://localhost:27017/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.Promise = global.Promise;
const quotingSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});
mongoose.model('Quote', quotingSchema);
const Quote = mongoose.model('Quote');

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

app.listen(port, () => console.log(`Express server listening on port ${port}`));