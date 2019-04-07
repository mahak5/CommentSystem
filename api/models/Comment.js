const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Comment
let Comment = new Schema({
  comment_text: {
    type: String
  },
  upvote_count: {
    type: Number
  },
  downvote_count: {
    type: Number
  }
},{
    collection: 'comment'
});

module.exports = mongoose.model('comment', Comment);