const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql2');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Set up passport local strategy
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) { return done(err); }
    if (!results.length) { return done(null, false); }
    bcrypt.compare(password, results[0].password, (err, res) => {
      if (res) { return done(null, { id: results[0].id, username: results[0].username }); }
      else { return done(null, false); }
    });
  });
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    done(err, { id: results[0].id, username: results[0].username });
  });
});

// Routes
app.get('/', (req, res) => {
  res.render('login.ejs', { message: req.flash('error') });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/', failureFlash: true }), (req, res) => {
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('dashboard.ejs', { user: req.user });
  }
  else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
