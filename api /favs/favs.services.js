const mongoose = require('mongoose');

const favsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required:true,
  }
}, { timestamps : true });

const favs = mongoose.model('fav', FavsSchema);

module.exports = Favs;
