const express = require('express');
const path = require('path');
const uploadImage = require('../middlewares/uploadMiddleware');
const pixelate = require('../middlewares/pixelateMiddleware');
const debug = require('debug')('pag-api:server/images');
const router = express.Router();


/* POST image. */
router.post('/', uploadImage.single('image'), function(req, res, next) {
  const imagePath = path.join(__dirname, 'public/images');

  if (!req.file) {
  	return res.status(401).json({error: 'Image not found, please provide an image'});
  }

  debug('passed upload image');
  return res.json({imageUrl: `/images/raw/${req.file.filename}`, filename: req.file.filename});
});

router.get('/pixelated', pixelate, function(req, res, next) {
	return res.json({pixelatedImageUrl: `/images/pixelated/${req.query.imageName}`, bitmap: req.bitmap});
});

module.exports = router;
