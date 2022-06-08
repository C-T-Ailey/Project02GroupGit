const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    reviewTitle: String,
    reviewBody: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
},{
    timestamps: true
})

const Book = mongoose.model("Book", bookSchema);

module.exports = {Book};