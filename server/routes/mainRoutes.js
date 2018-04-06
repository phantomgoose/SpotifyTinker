const path = require('path');
const fetch = require('node-fetch');

module.exports = (app) => {
  app.get('/spotify/play', async (req, res) => {
    const reqConfig = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${req.user.token}`,
      },
    };
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/play', reqConfig);
      if (!response.ok) {
        throw new Error(response.status);
      }
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.send({ res: JSON.stringify(err) });
    }
  });
  app.get('/spotify/pause', async (req, res) => {
    const reqConfig = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${req.user.token}`,
      },
    };
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/pause', reqConfig);
      if (!response.ok) {
        throw new Error(response.status);
      }
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.send({ res: JSON.stringify(err) });
    }
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
};
