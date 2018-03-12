const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const passport = require('passport');
const app = express();
const keys = require('./config/keys');

// set up middleware
// should probably use some kind of session store later
app.use(session({ secret: keys.sessionSecret, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// init passport
require('./config/passportConfig');

// init routes
fs.readdirSync(path.join(__dirname, 'routes')).forEach((file) => {
  require('./routes/' + file)(app);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('Server started on port', PORT);
