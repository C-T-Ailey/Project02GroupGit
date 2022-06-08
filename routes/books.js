const express = require("express");


var methodOverride = require("method-override")
const router = express.Router();

router.use(methodOverride("_method"))
const isLoggedIn = require("../helper/isLoggedIn");
router.use(express.urlencoded({extended: true}))

const bookCtrl = require("../controllers/book");

router.get("/book/add", isLoggedIn, bookCtrl.book_create_get);
router.post("/book/add", bookCtrl.book_create_post);
router.get("/book/index", bookCtrl.book_index_get);
router.get("/book/detail", bookCtrl.book_show_get);
router.get("/book/delete", bookCtrl.book_delete_get);
router.get("/book/edit", bookCtrl.book_edit_get);
router.put("/book/update", bookCtrl.book_update_put);




module.exports = router;