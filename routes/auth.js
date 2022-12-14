// Express dependency and init.
const router = require("express").Router()

const { attachment } = require("express/lib/response");
const isLoggedIn = require("../helper/isLoggedIn");
const authCtrl = require("../controllers/auth");

// Routes
router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
router.get("/auth/login", authCtrl.auth_login_get);
router.post("/auth/login", authCtrl.auth_login_post);
router.get("/auth/logout", authCtrl.auth_logout_get);
router.get("/auth/profile", isLoggedIn, authCtrl.auth_profile_get);
router.get("/auth/password", isLoggedIn, authCtrl.auth_password_get);
router.post("/auth/updatePW", authCtrl.auth_updatePW_put);
router.get("/auth/editprofile", isLoggedIn, authCtrl.auth_profile_edit_get);
router.post("/auth/updateprofile", authCtrl.auth_update_profile_put);

module.exports = router;