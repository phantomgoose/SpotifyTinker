const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    spotifyID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model('User', userSchema);
