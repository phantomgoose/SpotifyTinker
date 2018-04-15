const passport = require('passport');
const mongoose = require('mongoose');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./keys');
const User = mongoose.model('User');

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
    async (accessToken, refreshToken, expiresIn, profile, done) => {
      console.log(profile);
      try {
        const existingUser = await User.findOne({ spotifyID: profile.id }).exec();
        if (existingUser) {
          done(null, { username: existingUser.spotifyID, token: accessToken });
        } else {
          const newUser = await new User({ spotifyID: profile.id }).save();
          done(null, { username: newUser.spotifyID, token: accessToken });
        }
      } catch (err) {
        console.log(err);
        done(err, null);
      }
    }
  )
);
