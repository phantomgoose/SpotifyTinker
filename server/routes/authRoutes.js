const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: [
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-follow-modify',
        'user-follow-read',
        'user-library-read',
        'user-library-modify',
        'user-top-read',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'user-read-recently-played',
      ],
    })
  );
  app.get('/auth/spotify/callback', passport.authenticate('spotify', { successRedirect: '/', failureRedirect: '/' }));
};
