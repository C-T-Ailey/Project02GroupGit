// CRUD routes/APIs

const {Book} = require("../models/Book");
const {Author} = require("../models/Author");
const moment = require("moment");
const isLoggedIn = require("../helper/isLoggedIn");

// POST/GET/PUT/DELETE - save/retrieve/update/delete

// HTTP GET - load book entry form
exports.book_create_get = (req, res) => {

    Author.find()
    .then((authors) => {
        res.render("book/add", {authors});        
    })
    .catch(err => {
        console.log(err);
    })
}

//HTTP POST - save entry into database
exports.book_create_post = (req, res) => {
    console.log("book_create_post req body", req.body);

    let book = new Book(req.body);

    book.save()
    .then(()=>{
        req.body.authors.forEach(author => {
            Author.findById(author, (error, author) => {
                author.book.push(book);
                author.save()
            })
        })
        res.redirect("/book/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later :(")
    })
}

// HTTP GET - Bookshelf index - load all books
exports.book_index_get = (req, res) => {
    Book.find().populate("authors")
    .then(books => {
        res.render("book/index", {books, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - specific book by ID
exports.book_show_get = (req, res) => {
    console.log("book_show_get req id", req.query.id);
    Book.findById(req.query.id).populate("authors")
    .then(book => {
        res.render("book/detail", {book, moment});
    })
    .catch(err =>{
        console.log(err)
    })
}

// HTTP DELETE - Delete book by ID
exports.book_delete_get = (req, res) => {
    console.log("book_delete_get req id", req.query.id);
    Book.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/book/index")
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP GET - Load book edit form
exports.book_edit_get = (req, res) => {

    Book.findById(req.query.id)
    .then((book) => {
        res.render("book/edit", {book})
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP PUT - Update book
exports.book_update_put = (req, res) => {
    console.log("book_update_put req id", req.body.id)
    Book.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/book/index");
    })
    .catch(err => {
        console.log(err)
    })
}