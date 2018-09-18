const mongoose = require('mongoose');
const { Schema } = mongoose;

const goldSchema = new Schema ({
    name: {type: String, required: true},
    gold: {type: Number, default: 0},
}, {
    timestamps: true
});

module.exports = mongoose.model('Gold', goldSchema);