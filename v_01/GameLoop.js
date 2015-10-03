//GameLoop.js

function GameLoop(){

	var self = this;

	//create the renderer and set the background colour
	self.renderer = new PIXI.autoDetectRenderer(SCREEN_W, SCREEN_H);
	self.renderer.backgroundColor = 0x1919A3;

	//add it to the DOM body
	document.body.appendChild(this.renderer.view);

	//create a stage (all sprites added to this)
	self.stage = new PIXI.Container();

	//instantiate game objects
	self.player = new PlayerPaddle();

	//add the sprites to the stage (last added draws on top)
	self.stage.addChild(this.player.sprite);

	//set the gamestate
	gameState = 'playing';

	this.run = function() {
		requestAnimationFrame( this.animate );
	}

	this.animate = function(){

		//put all game object update/collision checking in here
		if ( gameState === 'playing') {
    		self.player.update();
    	}

    	//TODO handle a game over condition
    	if  ( gameState === 'gameOver') {

    	}
    	
    	//draw the stage (screen)
    	self.renderer.render(self.stage);
		
		//call this function recursiveley (equivelent to a while loop)
		requestAnimationFrame( self.animate );
	}
}