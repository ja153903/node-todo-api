const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = { User };
//
// const testUser = new User({
//   email: "jaimeabbariao@gmail.com"
// });
//
// testUser.save().then((doc) => {
//   console.log('Saved todo', doc)
// }).catch((e) => {
//   console.log('Unable to save to database', e);
// });
