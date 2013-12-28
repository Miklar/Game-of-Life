evolution = (function(){
	var me = {};

	function shouldDie(cell){
		return cell.isAlive && (cell.neighbourCount < 2 || cell.neighbourCount > 3);
	}

	function shouldReproduce(cell){
		return !cell.isAlive && cell.neighbourCount === 3;
	}

	function evolveCell(cell){
		if (shouldDie(cell))
			return 0;
		else if (shouldReproduce(cell))
			return 1;
		else 
			return cell.value;
	}

	me.evolve = function (cells){
		var rows = cells.length;
		var cols = cells[0].length;

		var nextGen = [];
		for (var y = 0; y < rows; y++){
			nextGen[y] = [];
			for (var x = 0; x < cols; x++){
				var cell = {
					isAlive: cells[y][x] === 1,
					value: cells[y][x],
					neighbourCount: neighbourCounter.count(x, y, cells)
				};

				nextGen[y][x] = evolveCell(cell);
			}
		}

		return nextGen;
	}
	
	return me;
}());
