const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image'],
  },
  tags: [String],
  creatorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
