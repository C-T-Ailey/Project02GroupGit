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
    res.render("auth/profile");
}

// GET - Edit Profile form
exports.auth_profile_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((user)=>{
        res.render("auth/editprofile", {user})
    })
    .catch(err => {
        console.log(err)
    })
}

// PUT - Update Profile
exports.auth_update_profile_put = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(()=>{
        res.redirect("/auth/profile");
    })
    .catch(err => {
        console.log(err)
    })

}

// GET - New Password form

exports.auth_password_get = (req, res) => {

    User.findById(req.query.id)
    .then((user) => {
        res.render("auth/password", {user})
    })
    .catch(err => {
        console.log(err)
    })
}

// PUT - Password Update

exports.auth_updatePW_put = (req, res, next) => {
    // Set var user to the user object making the request
    var user = req.user;
    // if the password submitted by the Change Password form doesn't match var user's password (decrypted with bcrypt.compareSync),
    if (!bcrypt.compareSync(req.body.password, user.password)){
        // flash a no-match error and redirect to the edit password page
        req.flash("error", "Your current password doesn't match.")
        res.redirect("/auth/password")
    } 
    // else if the form-submitted newPassword and confirmPassword don't match,
    else if (req.body.newPassword !== req.body.confirmPassword) {
        // flash an error stating this and redirect to the edit password page
        req.flash("error", "'New Password' and 'Confirm New Password' don't match.")
        res.redirect("/auth/password")
    } else {
        // else if everything matches up, match user password with the password of the user == the hidden id input
        User.findByIdAndUpdate(req.body.id, req.body)
        // promise, with errors passed to .catch after passing over the rest of the function
        .then(() => {
            // then store the newly encrypted value of confirmPassword
            let hashedPassword = bcrypt.hashSync(req.body.confirmPassword, salt);
            // set var user's password to the hashedPassword
            user.password = hashedPassword;
            // save the new user details to the database
            user.save(function(err){
                // if the process fails, pass the error over to catch()
                if (err) { next(err) }
                // if it succeeds, redirect to the user's profile page
                else {
                    res.redirect("/auth/profile");
                }
            })
        })
        // if the process encounters an error, log the error and send a try-later message
        .catch((err) => {
            console.log(err);
            res.send("Try again later.")
        })
    }
}
