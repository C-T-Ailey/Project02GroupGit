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

const Review = mongoose.model("Review", reviewSchema);

module.exports = {Review};