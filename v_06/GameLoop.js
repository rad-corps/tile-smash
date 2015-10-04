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
	self.ball = new Ball();

	//Generate Text Variables
	self.txtGameOver = new PIXI.Text('Game Over - Refresh Page To Start Again', FONT_STYLE);
	self.txtScore = new PIXI.Text('Score: ', FONT_STYLE);
	self.txtYouWin = new PIXI.Text('YOU WIN!', FONT_STYLE);

	//position Text Variables
	self.txtScore.position.set(20, SCREEN_H - 40);
	self.txtGameOver.position.set(SCREEN_W/2 - 175, SCREEN_H/2);

	//player score variable
	self.score = 0;

	//create an array for the blocks (dont worry about a 2D array, blocks will hold their col and row positions)
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
	self.stage.addChild(self.player.sprite);
	self.stage.addChild(self.ball.sprite);
	self.stage.addChild(self.txtScore);

	//set the gamestate
	gameState = 'playing';

	this.run = function() {
		requestAnimationFrame( this.animate );
	}

	//part of the update loop, check for collision every frame
	this.manageCollisions = function() {
		
		//handle ball/player collision
		if ( collisionCheck(self.ball.sprite, self.player.sprite))
		{
			self.ball.onPlayerCollision(self.player.sprite);
		}

		//handle ball/block collision
		for (var i in self.blocks)
		{
			//dont worry about removing blocks from the array when hit, just turn off their active flag. Keep it simple!
			if ( self.blocks[i].active === true )
			{
				if ( collisionCheck(self.ball.sprite, self.blocks[i].sprite) )
				{
					//tell the ball it collided with a block, tell the block a ball collided with it
					self.ball.onBlockCollision(self.blocks[i].sprite);
					self.blocks[i].onBallCollision();					

					//remove the sprite from the scene
					self.stage.removeChild(self.blocks[i].sprite);
					self.score += 20;
				}
			}
		}

		//check for game over condition
		if (gameState === 'gameOver')
		{
			self.stage.addChild(self.txtGameOver);
		}
	}

	//this is the main update loop called once per frame
	this.animate = function(){
		//put all game object update/collision checking in here
		if ( gameState === 'playing') {
			
			//get the X location of the mouse
			var mouseX = self.renderer.plugins.interaction.mouse.global.x;
    		
    		//pass mouseX location to player update
    		self.player.update(mouseX);

    		//update the ball
    		self.ball.update();

    		//check if ball collided with player
    		self.manageCollisions();

    		self.txtScore.text = "Score: " + self.score;

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