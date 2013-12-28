(function(externals, canvas){
	var ctx, me = {};

	var renderLiveCell = function(x, y, size){
		ctx.fillStyle = "518C7C";
		ctx.fillRect(x * size, y * size, size, size);
	};

	var clearWorld = function(w, h, s) {
		ctx.fillStyle = "EDF2C4";
		ctx.fillRect(0, 0, w*s, h*s);
	};

	me.render = function(world){
		var width = world.getWidth();
		var height = world.getHeight();

		clearWorld(width, height, world.tileSize);

		for(var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				if (world.map[y][x])
					renderLiveCell(x, y, world.tileSize);
			}
		}
	};

	var init = function(){
		ctx = canvas.getContext('2d');
	};

	externals.worldrender = me;
	init();
}(this, document.getElementById('game-area')))
