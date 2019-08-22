const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({
	destination: (req, res, next) => {
		next(null, './public/images');
	},
	filename: (req, file, next) => {
		let fileType = file.mimetype.split('/')[1];
		fileType = fileType === 'jpeg' ? 'jpg' : fileType;
		next(null, `image-${uuid()}.${fileType}`);
	}
})

module.exports = multer({storage});
