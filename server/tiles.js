module.exports = function(includes) {
	var out = {
		list : {},
		weights : [],
		maxWeight: 0,
		TileType : TileType
	};

	function TileType(name, weight) {
		this.name = name;
		// add to weights
		weight += out.weights[out.weights.length - 1].w;
		var type = this;
		out.wights.push({
			w : weight,
			o : type;
		});
		out.maxWeight = weight;
	}
	//TileType.prototype = includes.Card;

	function add(type) {
		out.list[type.name] = type;
	}

	// BEGIN TILE TYPE DECLARATIONS
	add(new TileType("grass") {

	});
	// END TILE TYPE DECLARATIONS

	return out;
};