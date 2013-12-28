var neighbourCounter = (function(){
	var me = {};

	me.count = function(x, y, generation){
		var c = 0, rows = generation.length, cols = generation[0].length;
		for (var i = Math.max(0, y-1); i < Math.min(rows, y+2); i++) {
			for (var j = x-1; j < x+2; j++) {
				if (i === y && j === x) continue;
				var cell = generation[i][j];
				if (cell === 1) 
					c++;
			}
		}

		return c;
	};

	return me;
}())
