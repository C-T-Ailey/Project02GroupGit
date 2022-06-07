// Passport dependency
const passport = require("passport");

// passport-local strategy dependency
const LocalStrategy = require("passport-local").Strategy;

// User schema dependency
const User = require("../models/User");

// Serialize the user
passport.serializeUser(function(user,done){
    done(null, user.id)
});

// Deserialize user and read info from DB according to user id
passport.deserializeUser(function(id, done){
    User.findByID(id,function(err, user){
        done(err, user);
    })
})

passport.use(new LocalStrategy(
    {
        usernameField: "emailAddress",
        passwordField: "password"
    },
    function(emailAddress, password, done) {
        User.findOne({ emailAddress: emailAddress }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

module.exports = passport;