const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.set('port', port);

const io = require('socket.io').listen(server);

app.get('/', function(req, res) {
    res.render('index');
});
io.sockets.on('connection', function (socket) {
    socket.on('posting_form', function (data) {
        console.log('generating random number now');
        const random_number = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', {response: data});
        socket.emit('random_number', {response: random_number});
    });
});

