const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res, next) => {
  const { google_id, myWords } = req.body;
  try {
    User.findOne({ google_id: google_id }, (err, doc) => {
      if (err) {
        throw new Error(err);
      }
      if (doc.my_words) {
        doc.my_words = myWords;
      } else {
        Object.assign(doc.my_words, myWords);
      }
      doc.save();
    });

    res.status(200).json({
      result: 'ok',
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
