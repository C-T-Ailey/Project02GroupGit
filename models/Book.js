const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    yearPublished: Number,
    reviewTitle: String,
    reviewBody: String,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
},{
    timestamps: true
})

const Book = mongoose.model("Book", bookSchema);

module.exports = {Book};