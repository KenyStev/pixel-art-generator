const Jimp = require('jimp');

const pixelate = function (req, res, next) {
	console.log("middleware");
	console.log(req.query);

	const imagePath = `./public/images/${req.query.imageName}`;
	const imagepxPath = `./public/images/pixelated/${req.query.imageName}`;

	Jimp.read(imagePath, (err, image) => {
		if(err) throw err;
		image
			.resize(512, 512)
			.gaussian(2)
			.blur(2)
			.pixelate(10)
			.write(imagepxPath);
	});

	next();
}

module.exports = pixelate;
