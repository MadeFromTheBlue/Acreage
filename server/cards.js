module.exports = function(includes) {
	var tilesm = require("./tiles.js")(includes);
	var actionsm = require("./actions.js")(includes);
	var itemsm = require("./items.js")(includes);
	var out = {
		tiles : tilesm.list;
		actions : actionsm.list;
		items : itemsm.list;
	};
	return out;
};s