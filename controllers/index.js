const res = require("express/lib/response");
const {Author} = require("../models/Author");
const {Book} = require("../models/Book");
const moment = require("moment");
const isLoggedIn = require("../helper/isLoggedIn")

// Root route (GET)
exports.index_get = (req, res) => {
    console.log("index")
    Book.find().populate("authors")
    .then(books => {
        res.render("home/index", {books, moment})
    })
    .catch(err => {
        console.log(err);
    })
}