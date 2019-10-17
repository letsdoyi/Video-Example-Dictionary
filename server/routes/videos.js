const express = require('express');
const router = express.Router();
const { getTenVideoSubtitlesFromLocalBy } = require('../lib/youtube');

let word;
let videoInfo;

router.post('/', (req, res, next) => {
  console.log('비디오 검색 요청', req.body.selected);
  let pageIndex;
  if (!req.body.selected.pageIndex) {
    pageIndex = 0;
  } else {
    pageIndex = req.body.selected.pageIndex;
  }
  const { word, categories } = req.body.selected;
  videoInfo = getTenVideoSubtitlesFromLocalBy(
    pageIndex,
    word,
    categories,
  );
});

router.get('/success', (req, res, next) => {
  if (videoInfo) {
    res.json({
      result: 'ok',
      searched: {
        word,
        videoInfo,
      },
    });
  }
});

module.exports = router;
