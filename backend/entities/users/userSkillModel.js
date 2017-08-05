const mongoose = require('mongoose');

// This lives inside User. Mongoose refers to it as an embedded collection
const userSkillsSchema = mongoose.Schema({
  // This will be an instance of the Skill model for the given ObjectId,
  // referenced as aUser.skill.name and aUser.skill.domain
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    required: true
  }
});

// https://stackoverflow.com/a/42763286/6732764
userSkillSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id }
});

module.exports = mongoose.model('UserSkill', userSkillSchema);
