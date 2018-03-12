const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./keys');

// storing entire profile in session for now
// ideally should store only ID and then look up profile from cache/db by ID during deserealization

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: '/auth/spotify/callback',
    },
    (accessToken, refreshToken, expiresIn, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      return done(null, profile);
    }
  )
);
