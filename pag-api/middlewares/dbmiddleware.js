const db = require('../dbconnection');

const find = function(image, next) {
	// console.log("dbmiddleware: ", req.image);
	db.one('select * from images where core_name = $1 OR full_name = $1', image)
		.then(data => {
			console.log("select one: ", data);
			return next(null, data);
		})
		.catch(err => {
			console.log(err);
			return next(err, data);
		});
}

const insert = function(image, next) {
	db.none('insert into images(core_name, full_name) values($/core_name/, $/full_name/)', image)
		.then(next)
		.catch(console.log)
}

const update = function(image, next) {
	db.none('update images set pixelated = $/pixelated/ where id = $/id/', image)
		.then(next)
		.catch(console.log)
}

const test = function(req, res, next) {
	db.one('select * from images where core_name = $1 OR full_name = $1', req.query.testImage)
		.then(data => {
			console.log("select one: ", data);
			req.context = data;
			next(null, req, res);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json({message: "image not found"});
			// return next(err);
		});
}

module.exports = {
	find,
	insert,
	update,
	test
};
