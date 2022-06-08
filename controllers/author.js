// CRUD routes/APIs

const {Author} = require("../models/Author");
const {Book} = require("../models/Book");
const moment = require("moment");
const isLoggedIn = require("../helper/isLoggedIn");

// POST/GET/PUT/DELETE - save/retrieve/update/delete

// HTTP GET - load book entry form
exports.author_create_get = (req, res) => {
    res.render("author/add");
}

//HTTP POST - save entry into database
exports.author_create_post = (req, res) => {
    console.log(req.body);

    let author = new Author(req.body);

    author.save()
    .then(()=>{
        res.redirect("/author/index");
    })
    .catch(err => {
        console.log(err);
        res.send("Try again later :(")
    })
}

// HTTP GET - Author index - load all authors
exports.author_index_get = (req, res) => {
    Author.find().populate("book")
    .then(authors => {
        res.render("author/index", {authors, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - specific author by ID
exports.author_show_get = (req, res) => {
    console.log(req.query.id);

    Author.findById(req.query.id).populate("book")
    .then(author => {
        res.render("author/detail", {author, moment});
    })
    .catch(err =>{
        console.log(err)
    })
}

// HTTP DELETE - Delete author by ID
exports.author_delete_get = (req, res) => {
    console.log(req.query.id);
    Author.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/author/index")
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP GET - Load author edit form
exports.author_edit_get = (req, res) => {

    Author.findById(req.query.id)
    .then((author) => {
        res.render("author/edit", {author})
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP PUT - Update author
exports.author_update_put = (req, res) => {
    console.log(req.body.id)
    Author.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/author/index");
    })
    .catch(err => {
        console.log(err)
    })
}