const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
app.set('port', port);
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

const io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function(socket) {
    socket.on('button_click', function() {
        count +=1;
        io.emit('times', {response: count});
    });
    socket.on('reset', function() {
        count = 0;
        io.emit('updatedCount', {response: count});
    });
});

