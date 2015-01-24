// routes/routes.js
module.exports = function(app, passport, path) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', isLoggedIn, function(req, res) {

        // load the index.demo.html file from protected directory
        res.sendfile('./protected/index.html');
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });

        // render the page and pass in any flash data if it exists
        //res.sendfile('./protected/newuser.html');
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the index page
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // use login page ejs from views
        res.render('login.ejs', { message: req.flash('loginMessage') });

        // send login page from server views directory
        //res.sendfile('views/login.html');
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the login page if there is an error
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
    // GET PROTECTED PARTIALS ==============
    // =====================================
    app.get('/partials/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, '../protected/partials', req.params[0]);
        console.log('##Check request', reqPath);
        res.sendfile(reqPath)
    });

    // =====================================
    // GET PROTECTED JAVASCRIPT ============
    // =====================================
    app.get('/javascript/*', isLoggedIn, function(req, res) {
        var reqPath = path.join(__dirname, '../protected/javascript', req.params[0]);
        console.log('## Check request', reqPath);
        res.sendfile(reqPath)
    });

    // =====================================
    // API CALLS TO DB =====================
    // =====================================
    app.get('/api/user', isLoggedIn, function(req, res) {});
    app.get('/api/product', isLoggedIn, function(req, res) {});
    app.get('/api/quote', isLoggedIn, function(req, res) {});

    // =====================================
    // HANDLE DEFAULT REQUEST TO INDEX =====
    // =====================================
    app.get('/*', isLoggedIn, function(req, res) {
        res.sendfile(path.resolve('./protected/index.html'));
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