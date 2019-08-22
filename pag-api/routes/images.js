const express = require('express');
const path = require('path');
const uploadImage = require('../middlewares/uploadMiddleware');
const debug = require('debug')('pag-api:server/images');
const router = express.Router();


/* POST image. */
router.post('/', uploadImage.single('image'), function(req, res, next) {
  const imagePath = path.join(__dirname, 'public/images');
  console.log(req.image);

  if (!req.file) {
  	res.status(401).json({error: 'Image not found, please provide an image'});
  	return next(err);
  }

  debug('passed upload image');
  res.json({imageUrl: `/images/${req.file.filename}`});
});

module.exports = router;
