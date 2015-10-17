var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
	title: String,
  author: String,
	url: String,
  points: { type : Number, default: 0 },
  description: { type : String, default: "No description" },
  pic: { type : String, default: "https://images.leasingoptions.uk/vehicleimage.ashx?capId=68969&width=402&height=288&type=Car" },
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);

