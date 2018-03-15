const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/spotifyTinker');

fs.readdirSync(modelsPath).forEach((file) => {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});
