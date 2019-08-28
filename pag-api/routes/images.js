const express = require('express');
const path = require('path');
const uploadImage = require('../middlewares/uploadMiddleware');
const pixelate = require('../middlewares/pixelateMiddleware');
const dbServices = require('../middlewares/dbmiddleware');
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

/* GET */
router.get('/test', dbServices.test, function(req, res, next) {
  console.log("context: ", req.context);
  return res.json({imageUrl: `/images/raw/${req.context.full_name}`, filename: req.context.full_name});
});

/* GET pixelated image*/
router.get('/pixelated', pixelate, function(req, res, next) {
	return res.json({pixelatedImageUrl: `/images/pixelated/${req.query.imageName}`, bitmap: req.bitmap});
});

module.exports = router;
