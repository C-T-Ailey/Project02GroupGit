// Express dependency
const express = require("express");

// Mongoose dependency
const mongoose = require("mongoose");

// dotenv configurations dependency
require("dotenv").config();

// Express EJS Layouts dependency (enable EJS file formatting)
const expressLayouts = require("express-ejs-layouts");

// connect-flash dependency for flash messages
const flash = require("connect-flash");

// express init.
const app = express();

// body parser
app.use(express.urlencoded({extended: true}));

// static file storage location (./public)
app.use(express.static("public"));

// employ EJS
app.use(expressLayouts);

// Port config
const PORT = process.env.PORT;

// express-session dependency
let session = require ("express-session");

// passport dependency
let passport = require("./helper/ppConfig");

// enable flash messages to be used by the app
app.use(flash());

// express-session configurations
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 3600000}
}))

// initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// ??
app.use(function(req, res, next){
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
})

// Import routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books")



// Mount routes
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/", authorRouter);
app.use("/", bookRouter);


// listen to port with callback function
app.listen(PORT, () => console.log(`Running on port ${PORT}.`))

// set node.js to look for EJS files in the Views folder
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongoDB connected")
    }
);