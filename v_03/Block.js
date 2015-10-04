//Block.js

//block num range from 0 to 6 inclusive
function Block(blockNum_, blockCol_, blockRow_){
	var self = this;

	//load the sprite
	self.sprite = PIXI.Sprite.fromImage("../img/block_" + blockNum_ + ".png");
	
	//place player paddle in X center of screen and 9/10ths of the way towards the bottom
	self.sprite.position.set(blockCol_ * BLOCK_W_SPACING + BLOCK_X_MARGIN, blockRow_ * BLOCK_H_SPACING + BLOCK_Y_MARGIN);

	//draw from center
	self.sprite.anchor.set(0.5, 0.5);
	
	//TODO add collision detection
	this.update = function()
	{
		if ( gameState === 'playing'){ 
			
		}
	}
}