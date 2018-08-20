// Counter - Tom Compton

var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'counterSecret',
    resave: false,
    saveUninitialized: true
  }));

app.get('/', function (req, res){
    req.session.counter = req.session.counter ? req.session.counter += 1: 1;
    res.render('index', {counter: req.session.counter});
  });

app.post('/double', function (req, res) {
    req.session.counter += 1;
    res.redirect('/');
});

app.post('/clear', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})