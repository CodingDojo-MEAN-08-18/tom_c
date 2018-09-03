const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: 'secretHere',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

mongoose.connect('mongodb://localhost:27017/lemurs', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.Promise = global.Promise;
const lemurSchema = new mongoose.Schema({
    name: String,
    eye_color: String,
    legs: Number
}, {timestamps: true});
mongoose.model('Lemur', lemurSchema);
const Lemur = mongoose.model('Lemur');

// Root route
app.get('/', function(req, res) {
    showAll = Lemur.find({}, function(err, lemurs) {
        res.render('index', { showAll: lemurs});
    });
});

// Create route
app.get('/lemurs/new', function(req, res) {
    res.render('new');
});

// Create Post route
app.post('/lemurs', function(req, res) {
    console.log('POST: ', req.body);
    var newLemur = new Lemur(req.body);
    newLemur.save(function(err) {
        if (err) {
            console.log(err);
            for (var key in err.errors) {
                req.flash('lemurs', err.errors[key].message);
        }};
        res.redirect('/');
    });
});

// Show a single mongoose
app.get('/lemurs/:id', function(req, res) {
//    console.log(req.params.id);
    Lemur.find({_id: req.params.id}, function(err, lemur) {
        if (err) { console.log(err); }
//        console.log(lemur);
        res.render('show', { aLemur: lemur[0] });
    });
});

// Edit a single lemur
app.get('/lemurs/edit/:id', function(req, res) {
    Lemur.find({_id: req.params.id}, function(err, lemur) {
        if (err) { console.log(err); }
        res.render('edit', {aLemur: lemur[0] });
    });
});

// Post edit to db
app.post('/lemurs/:id', function(req, res) {
    console.log('POST: ', req.body);
    Lemur.updateOne({_id: req.params.id}, req.body, function(err, result) {
        if (err) {
            console.log(err);
            for (var key in err.errors) {
                req.flash('lemurs', err.errors[key].message);
        }};
        res.redirect('/');
    });
});

// Destroy route
app.post('/lemurs/destroy/:id', function(req, res) {
    Lemur.deleteOne({_id: req.params.id}, function(err, result) {
        console.log('deleted lemur');
        res.redirect('/');
    })
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));