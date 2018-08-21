// Survey Form - Tom Compton

var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index');
  });

app.post('/result', function (req, res) {
    const data = {
        name: req.body.name,
        loc: req.body.loc,
        lang: req.body.lang,
        comment: req.body.comment
    };
    res.render('results', {user: data});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})