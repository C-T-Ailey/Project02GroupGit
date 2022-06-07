// APIs for user registration/authentication

const User = require("../models/User")

// bcrypt dependency
const bcrypt = require("bcrypt");
const salt = 10;

// require ppConfig.js
const passport = require("../helper/ppConfig");

// HTTP GET - Sign up form

exports.auth_signup_get = (req,res) => {
    res.render("auth/signup");
}

// HTTP POST - Sign up post/save to DB

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body)
    console.log(req.body.password)
    let hashedPw = bcrypt.hashSync(req.body.password, salt);
    console.log(hashedPw)

    user.password = hashedPw

    user.save()
    .then(()=>{
        res.redirect("/auth/login");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later.");
    })
}

// Http GET - log in route for login form

exports.auth_login_get = (req, res) => {
    res.render("auth/login");
}

// HTTP POST - log in route to post/authenticate data

exports.auth_login_post =
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/auth/login",
        failureFlash: "Invalid username or password.",
        successFlash: "You have successfully logged in."
    })


// HTTP GET - logout route - to logout user

exports.auth_logout_get = (req, res) => {
    console.log("logout")
    // Invalidates the session
    req.logout()
    req.flash("success", "You have successfully logged out.")
    res.redirect('/auth/login');
}