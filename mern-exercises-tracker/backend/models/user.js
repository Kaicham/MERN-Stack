const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSChema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSChema);
module.exports = User;