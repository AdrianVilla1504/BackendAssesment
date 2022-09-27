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

const favsList = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  favs: [favsSchema],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
}, { timestamps: true });

const Favs = mongoose.model('favs', favsList);
const singleFav = mongoose.model('fav', favsSchema);

module.exports =  { Favs, singleFav };
