describe("When the evolution evolves", function(){
	it("cell with fewer than 2 neighbours dies", function(){
		var generation = [];
		generation[0] = [1,1,1];
		var nextGeneration = evolution.evolve(generation);

		expect(nextGeneration).toEqual([[0,1,0]]);
	});

	it("cell with more than three live neighbours dies", function(){
		var generation = [];
		generation[0] = [0,1,0];
		generation[1] = [1,1,1];
		generation[2] = [0,1,0];

		var nextGen = evolution.evolve(generation);
		expect(nextGen[1][1]).toEqual(0);
	});

	it("empty cell with exactly three live neightbours is born", function(){
		var generation = [];
		generation[0] = [1,1,1];
		generation[1] = [0,0,0];
		var nextGen = evolution.evolve(generation);
		expect(nextGen).toEqual([[0,1,0],[0,1,0]]);
	});

	it("a blinker is flipped", function(){
		var g = [[0,0,0],[1,1,1],[0,0,0]];
		var nextGen = evolution.evolve(g);
		expect(nextGen).toEqual([[0,1,0],[0,1,0],[0,1,0]]);
	});
});

