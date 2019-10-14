const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const userSchema = new mongoose.Schema({
  google_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_image_url: {
    type: String,
    required: true,
  },
  // subscriptions_frequency: {
  //   type: Object,
  //   required: false,
  // },
  // my_words: {
  //   type: Object,
  //   required: false,
  // },
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema);

// subscriptions_frequency: {
//   channel_name: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
// },

// my_words: {
//   word: {
//     definition: {
//       type: String,
//       required: false,
//     },
//     part_of_speech: {
//       type: String,
//       required: false,
//     },
//     pronunciation: {
//       type: String,
//       required: false,
//     },
//     synonyms: {
//       type: Array,
//       required: false,
//     },
//     search_frequency: {
//       type: Number,
//       required: false,
//     },
//     searched_at: {
//       type: Date,
//       required: false,
//     },
//   },
// },
