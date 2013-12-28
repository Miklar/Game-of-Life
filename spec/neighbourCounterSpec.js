describe("When counting neighbours, ", function(){
	it("all adjactent alive cells are counted", function(){
		var g = [];
		g[0] = [1,1,1];
		g[1] = [1,0,1];
		g[2] = [1,1,1];
		var c = neighbourCounter.count(1, 1, g);
		expect(c).toEqual(8);
	});

	it("only alive cells are counted", function(){
		var g = [];
		g[0] = [0,1,0];
		g[1] = [0,0,0];
		g[2] = [0,0,0];
		var c = neighbourCounter.count(1, 1, g);
		expect(c).toEqual(1);
	});

	it("does not count self", function(){
		var g = [];
		g[0] = [0,1,0];
		g[1] = [0,1,0];
		g[2] = [0,1,0];
		var c = neighbourCounter.count(1, 1, g);
		expect(c).toEqual(2);
	});

	it("handles upper left corner", function(){
		var g = [];
		g[0] = [0,1,0];
		g[1] = [0,1,0];
		g[2] = [0,1,0];
		var c = neighbourCounter.count(0, 0, g);
		expect(c).toEqual(2);
	});

	it("handles lower right corner", function(){
		var g = [];
		g[0] = [0,1,0];
		g[1] = [0,1,0];
		g[2] = [0,1,0];
		var c = neighbourCounter.count(2, 2, g);
		expect(c).toEqual(2);
	});

	it("uses x and y correct", function(){
		var g = [];
		g[0] = [0,0,0,1];
		g[1] = [0,0,0,0];
		var c = neighbourCounter.count(2, 0, g);
		expect(c).toEqual(1);
	});

	it("counts neighbour to top middle over a blinker correctly", function(){
		var g = [[0,0,0],[1,1,1],[0,0,0]];
		var c = neighbourCounter.count(1, 0, g);
		expect(c).toEqual(3);
	});
});
