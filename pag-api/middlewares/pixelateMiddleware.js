const Jimp = require('jimp');
const dbServices = require('./dbmiddleware');

const pixelate = function (req, res, next) {
	console.log("middleware");
	console.log(req.query);

	dbServices.find(req.query.imageName, (err, data) => {
		const imagePath = `./public/images/raw/${req.query.imageName}`;
		const imagepxPath = `./public/images/pixelated/${req.query.imageName}`;

		if (!err) {
			Jimp.read(imagepxPath, (err, image) => {
				if(err) throw err;
				req.bitmap = image.resize(64, 64).bitmap;
				next();
			});
		}

		Jimp.read(imagePath, (err, image) => {
			if(err) throw err;
			image
				.resize(512, 512)
				.gaussian(2)
				.blur(2)
				.pixelate(10)
				.write(imagepxPath);
			req.bitmap = image.clone().resize(64, 64).bitmap;
			next();
		});
	});
}

module.exports = pixelate;
