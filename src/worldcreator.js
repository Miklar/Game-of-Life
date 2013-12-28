worldCreator = (function(){
	var me = {};

	function calculateWidth(config){
		if (!config) return 0;
		return config.widthInPixels / config.tileSizeInPixels;
	};

	function calculateHeight(config){
		if (!config) return 0;
		return config.heightInPixels / config.tileSizeInPixels;
	}

	me.create = function(config){
		var width = calculateWidth(config) || 1;
		var height = calculateHeight(config) || 1;

		return {
			map: mapcreator.create(width, height, mapcreator.getRpentomino()),
			getWidth: function() { return this.map[0].length; },
			getHeight: function() { return this.map.length; },
			tileSize: config.tileSizeInPixels
		};
	};

	return me;
})();
