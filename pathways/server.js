const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const dev = process.env.NODE_ENV !== 'production';

const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare().then(() => {
    // REQUIREMENTS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const dbfunc = require('./server/dbfunc');
    require('./server/dbsetup').setupDatabase();
    const session = require('express-session');
    const passport = require('passport');
    const localStrategy = require('passport-local');
    const bcrypt = require('bcrypt');

    const app = express();

    // MIDDLEWARE
    app.set('trust proxy', true);
    app.use(require('cors')());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json());
    
    // PASSPORT CONFIG
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(dbfunc.findUserById);
    passport.use(new localStrategy(dbfunc.findAndVerifyUserByName));
    
    
    // ROUTES
    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.post('/createUser', (req, res) => {
        var hash = bcrypt.hashSync(req.body.password, 12); // 12 is the salt
        const new_user = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
            bio: req.body.bio,
            education: req.body.education,
            classOf: req.body.classOf
        };
        const done = (err, data) => {
            if(err) res.sendStatus(400);
            else res.sendStatus(200);
        };
        dbfunc.createUser(new_user, done);     
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/');
    }

    app.route('/loginUser')
    .post(passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
        res.sendStatus(200);
        //res.redirect('/profile');
    });

    app.use((req, res, next) => {
        res.status(404)
          .type('text')
          .send('Not Found');
    });

    app.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server ready on http://localhost:3000');
    });

}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
});