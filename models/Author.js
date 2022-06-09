const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: String,
    nationality: String,
    birthYear: Number,
    createdBy: String,
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
},{
    timestamps: true
})

const Author = mongoose.model("Author", authorSchema)

module.exports = {Author}
