const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
app.set('port', port);
const { Schema } = mongoose;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/messageBoard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        min: 3,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    comment: {
        type: String,
        required: true,
        min: 3,
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    },
});

const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/', function(req, res) {
    Message.find({})
        .populate('comments')
        .then(messages => res.render('index', { messages: messages }))
        .catch(console.log);
});

app.post('/message', function(req, res) {
    console.log('POST: ', req.body);
    Message.create(req.body)
        .then(message => {
            console.log('created message', message);
            res.redirect('/');
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            res.render('index', { errors });
        })
});

app.post('/comment/:id', function(req,res) {
    console.log('Comment Post: ', req.body);
    Message.findById({_id: req.params.id}, function(err, message) {
        const newComment = new Comment(req.body);
        newComment.message = message._id;
        Message.updateOne({_id: message._id}, {$push: {comments: newComment.id}}, function(err) {
        });
        newComment.save(function(err) {
            if (err) {
                console.log(err);
                res.render('index', {errors: newComment.errors});
            } else {
                console.log('created comment');
                res.redirect('/')
            }
        })
    })
    // Comment.create(req.body)
    //     .then(comment => {
    //         console.log('created comment', comment);
    //         return Message.findById(comment.message)
    //             .then(message => {
    //                 message.comments.push(comment.id);
    //                 return message.save()
    //             })
    //             .then(() => res.redirect('/'));
    //     })
    //     .catch(error => {
    //         const errors = Object.keys(error.errors)
    //             .map(key => error.errors[key].message)
    //         res.render('index', { errors });
    //     })
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));