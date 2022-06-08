const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: [1, "First name cannot be blank."],
        maxlength: [25, "First name cannot exceed 25 characters."]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [1, "Last name cannot be blank."],
        maxlength: [25, "Last name cannot exceed 25 characters."]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Your password must be at least 6 characters."]
    }

},{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log("Password (plain text):", password);
    console.log("Password (encrypted):", this.password);
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;