const multer = require('multer');
const uuid = require('uuid');
const dbServices = require('./dbmiddleware');

const storage = multer.diskStorage({
	destination: (req, res, next) => {
		next(null, './public/images/raw');
	},
	filename: (req, file, next) => {
		let fileType = file.mimetype.split('/')[1];
		fileType = fileType === 'jpeg' ? 'jpg' : fileType;
		const originalName = file.originalname;
		const hashedName = `image-${uuid()}.${fileType}`;

		dbServices.insert({
			core_name: originalName,
			full_name: hashedName
		}, () => {
			next(null, hashedName);
		})
	}
})

module.exports = multer({storage});
