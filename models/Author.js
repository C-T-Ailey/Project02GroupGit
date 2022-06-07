const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthYear: Number,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
},{
    timestamps: true
})