var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback) {
		orm.selectAll('burger', function(res){
			callback(res);
		});
	},
	
	insertOne: function(cols, vals, callback) {
		orm.insertOne('burger', cols, vals, function(res){
			callback(res);
		});
	},
	updateOne: function(objColVals, condition, callback) {
		orm.updateOne('burger', objColVals, condition, function(res){
			callback(res);
		});
	}
};

module.exports = burger;