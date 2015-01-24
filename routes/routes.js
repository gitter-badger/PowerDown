// routes/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', isLoggedIn, function(req, res) {

        // load the index.demo.html file from protected directory
        res.sendfile('./protected/index.demo.html');
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/newuser', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendfile('./protected/newuser.html');
    });

    // process the signup form
    app.post('/newuser', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the index page
        failureRedirect : '/signup' // redirect back to the signup page if there is an error
    }));


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // send login page from server views directory
        res.sendfile('views/login.demo.html');
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login' // redirect back to the login page if there is an error
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    // =====================================
    // GET PROTECTED PARTIALS ==============
    // =====================================
    app.get('/partials/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, './protected/partials', req.path);
        res.sendfile(reqPath)
    });

    // =====================================
    // GET PROTECTED JAVASCRIPT ============
    // =====================================
    app.get('/javascript/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, './protected/javascript', req.path);
        res.sendfile(reqPath)
    })

    // =====================================
    // API CALLS TO DB =====================
    // =====================================
    app.get('/api/user', isLoggedIn, function(req, res) {});
    app.get('/api/product', isLoggedIn, function(req, res) {});
    app.get('/api/quote', isLoggedIn, function(req, res) {});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    res.redirect('/login');
}