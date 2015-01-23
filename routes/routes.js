// routes/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', isLoggedIn, function(req, res) {

        // load the index.html file from protected directory
        res.sendfile('./protected/index.html');
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // send login page from server views directory
        res.sendfile('views/login.html');
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    // =====================================
    // GET PARTIALS ========================
    // =====================================
    app.get('/partials/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, './protected/partials', req.path);
        res.sendfile(reqPath)
    })
    app.get('/javascript/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, './protected/javascript', req.path);
        res.sendfile(reqPath)
    })
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    res.redirect('/login');
}