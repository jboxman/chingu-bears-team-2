const mongoose = require('mongoose');

const userSkillSchema = require('./userSkillModel').schema;

// http://blog.robertonodi.me/node-authentication-series-email-and-password/
const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  // Do not include in query result by default
  password: {
    type: String,
    required: true,
    select: false
  },
  // Do not include in query result by default
  passwordSalt: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  // TBD: Can this be optional?
  lastName: {
    type: String,
    trim: true,
    required: false
  },
  bio: {
    type: String,
    trim: true,
    required: false
  },
  country: {
    type: String,
    trim: true,
    required: false
  },
  region: {
    type: String,
    trim: true,
    required: false
  },
  city: {
    type: String,
    trim: true,
    required: false
  },
  geoLat: {
    type: String,
    trim: true,
    required: false
  },
  geoLong: {
    type: String,
    trim: true,
    required: false
  },
  avatarUrl: {
    type: String,
    trim: true,
    required: false
  },
  skills: {
    type: [userSkillSchema]
  }
},
{
  timestamps: true
});

// https://stackoverflow.com/a/42763286/6732764
userSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id }
});

module.exports = mongoose.model('User', userSchema);
