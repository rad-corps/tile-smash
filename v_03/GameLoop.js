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

	//create a 2D array for the blocks
	self.blocks = [];

	//create all the blocks
	var blockColour = 0;
	for ( var col = 0; col < BLOCK_COLS; ++col)
	{
		for ( var row = 0; row < BLOCK_ROWS; ++row)
		{

			var tempBlock = new Block(blockColour % 6, col, row);
			self.blocks.push(tempBlock);
			self.stage.addChild(tempBlock.sprite);
			blockColour++;
		}
	}

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
			
			//get the X location of the mouse
			var mouseX = self.renderer.plugins.interaction.mouse.global.x;
    		
    		//pass mouseX location to player update
    		self.player.update(mouseX);
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