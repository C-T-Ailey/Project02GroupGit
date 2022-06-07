const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    yearPublished: Number,
    rating: Number,
    review: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
},{
    timestamps: true
})