const express = require('express');
const app = express();
const commentRoutes = express.Router();

let Comment = require('../models/Comment');

commentRoutes.route('/add').post(function (req, res) {
    let comment = new Comment(req.body);
    comment.save()
      .then(comment => {
        res.status(200).json({'comment': 'comment added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

commentRoutes.route('/').get(function (req, res) {
    Comment.find(function (err, comments){
    if(err){
      console.log(err);
    }
    else {
      res.json(comments);
    }
  });
});

commentRoutes.route('/upvote/:id').post(function (req, res) {
    // console.log(req.params.id);
    Comment.findById(req.params.id, function(err, comment) {
        // console.log("in upvote");
    if (!comment)
      return next(new Error('Could not load Document'));
    else {
        comment.upvote_count = comment.upvote_count+1;
        comment.save().then(comment => {
          res.json('Upvoted complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

commentRoutes.route('/downvote/:id').post(function (req, res) {
    Comment.findById(req.params.id, function(err, comment) {

    if (!comment)
      return next(new Error('Could not load Document'));
    else {
        comment.downvote_count = comment.downvote_count+1;
        comment.save().then(comment => {
          res.json('Downvoted complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
module.exports = commentRoutes;