const res = require("express/lib/response");

// Root route (GET)
exports.index_get = (req, res) => {
    console.log("index")
    res.render("home/index.ejs")
}