const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  // This can reference another collection, but for our purposes a string is likely acceptable
  domain: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  }
},
{
  timestamps: true
});

// https://stackoverflow.com/a/42763286/6732764
skillSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id }
});

module.exports = mongoose.model('Skill', skillSchema);
