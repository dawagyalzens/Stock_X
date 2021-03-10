const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 7
    },
    userType: {
        type: String,
        enum: ["Admin", "User"]
    }
}, {
    timestamps: true
});

const users = mongoose.model('users', userSchema);

module.exports = users;