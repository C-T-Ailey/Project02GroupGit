const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    yearPublished: Number,
    reviewTitle: String,
    reviewBody: String,
    imageUrl: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
},{
    timestamps: true
})

const Book = mongoose.model("Book", bookSchema);

module.exports = {Book};
