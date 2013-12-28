(function(externals){
	var me = {};

	function createEmptyMap(width, height){
		var map = [];

		for (var i = 0; i < height; i++) {
			map.push([]);
			for (var j = 0; j < width; j++){
				map[i].push(0);
			}
		}

		return map;
	}

	function centerInMap(obj, map){
		if (!obj) return map;
		var vCenterOfMap = Math.floor(map.length / 2);
		var hCenterOfMap = Math.floor(map[0].length / 2);

		var objWidth = obj[0].length;
		var objHeight = obj.length;
		var vOffset = vCenterOfMap - Math.floor(objHeight/2);
		var hOffset = hCenterOfMap - Math.floor(objWidth/2);

		for (var y = 0; y < objHeight; y++) {
			for (var x = 0; x < objWidth; x++) {
				map[vOffset + y][hOffset + x] = obj[y][x];
			}
		}
		return map;
	}

	me.getBlinker = function(){
		return [[1,1,1]];
	};

	me.getRpentomino = function(){
		return [[0,1,1],[1,1,0],[0,1,0]];
	};

	me.create = function(width, height, obj){
		var map = createEmptyMap(width, height);
		map = centerInMap(obj, map);

		return map;
	};

	externals.mapcreator = me;
}(this))
