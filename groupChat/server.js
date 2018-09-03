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
const users = [];
const messages = [];

function curUser(user) {
    curCount = users.length;
    for (let i=0; i<curCount; i++) {
        if (user == users[i]) {
            return true;
        }
    }
    return false;
}

io.sockets.on('connection', function(socket) {
    socket.on('loadPage', function(data) {
        if (curUser(data.user) === true) {
            socket.emit('userExists', {error: 'User already exists'})
        } else {
            users.push(data.user);
            socket.emit('messageLoad', {currentUser: data.user, messages:messages})
        }
    });
    socket.on('newMessage', function(data) {
        messages.push({name: data.user, message: data.message});
        io.emit('newMessagePost', {newMessage: data.message, user: data.user});
    });
});