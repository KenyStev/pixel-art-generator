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

module.exports = {
	find,
	insert
};
