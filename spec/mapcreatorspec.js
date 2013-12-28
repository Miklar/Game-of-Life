describe("Map creator", function(){
	it("creates empty map with given dimensions", function(){
		var map = mapcreator.create(3, 5);
		expect(map.length).toEqual(5);
		expect(map[0].length).toEqual(3);
	});

	it("centers given object in world", function(){
		var map = mapcreator.create(3, 3, [[1]]);
		expect(map).toEqual([[0,0,0],[0,1,0],[0,0,0]]);
	});

	it("can create blinker", function(){
		var blinker = mapcreator.getBlinker();
		expect(blinker).toEqual([[1,1,1]]);
	});

	it("can center blinker in 3x3 map", function(){
		var map = mapcreator.create(3,3, mapcreator.getBlinker());
		expect(map).toEqual([[0,0,0],[1,1,1],[0,0,0]]);
	});

	it("can center blinker in 5x5 map", function(){
		var map = mapcreator.create(5,5, mapcreator.getBlinker());
		expect(map).toEqual([[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]]);
	});

	it("can create the R-pentomino", function(){
		var pento = mapcreator.getRpentomino();
		expect(pento).toEqual([[0,1,1],[1,1,0],[0,1,0]]);
	});

	it("can center the R-pentomino", function(){
		var map = mapcreator.create(5, 5, mapcreator.getRpentomino());
		expect(map).toEqual([[0,0,0,0,0],[0,0,1,1,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]);
	});
});
