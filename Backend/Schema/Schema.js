const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        dateOfBirth: {
            type: Date,
            require: true,
        },
        sequrityQuestion: {
            type: String,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        state: {
            type: String,
            require: true,
        },
        zipCode: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true

        },
        password: {
            type: String,
            require: true,
        }, 
    },
    { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;