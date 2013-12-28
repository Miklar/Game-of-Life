(function(externals){
	var world;

	var recreateWorld = function(){
		var nextGen = externals.evolution.evolve(world.map);
		world.map = nextGen;
		externals.worldrender.render(world);
	};

	var init = function(){
		var gameArea = document.getElementById('game-area');
		gameArea.height = document.body.clientHeight;
		gameArea.width = document.body.clientWidth;

		var setup = {
			widthInPixels: gameArea.width,
			heightInPixels: gameArea.height,
			tileSizeInPixels: 10
		};
		
		world = worldCreator.create(setup);
		externals.worldrender.render(world);
		externals.setInterval(recreateWorld, 2);
	};

	init();
}(this))
