// APIs for User Registration and Authentication

const User = require("../models/User");

// Require bCrypt
const bcrypt = require("bcrypt");
const salt = 10;

// require ppConfig.js
const passport = require("../helper/ppConfig");
const { Author } = require("../models/Author");

// HTTP GET - Sign up route - to load the signup form

exports.auth_signup_get = (req,res) => {
    res.render("auth/signup");
}

// HTTP POST - Sign up route - to post/save data

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    console.log(req.body.password)
    // Hash the PW
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(hashedPassword);

    user.password = hashedPassword;

    user.save()
    .then(()=>{
        res.redirect("/auth/login");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later :(");
    })

}

// HTTP GET - log in route - to load the login form

exports.auth_login_get = (req, res) => {
    res.render("auth/login");
}

// HTTP POST - log in route - to post/authenticate data

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

// GET - profile menu

exports.auth_profile_get = (req, res) => {
    console.log("profile");
    res.render("auth/profile");
}

// GET - Edit Profile form

exports.auth_edit_get = (req, res) => {

    User.findById(req.query.id)
    .then((user) => {
        res.render("auth/edit", {user})
    })
    .catch(err => {
        console.log(err)
    })
}

// PUT - Profile Update

exports.auth_update_put = (req, res) => {
    console.log(req.body.id)
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/auth/profile");
    })
    .catch(err => {
        console.log(err)
    })
}
