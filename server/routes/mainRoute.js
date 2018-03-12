module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ test: 'hi' });
  });
  app.get('/test', (req, res) => {
    res.send({ storedUser: req.user });
  });
};
