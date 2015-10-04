//PlayerPaddle.js

function PlayerPaddle(){
	var self = this;

	//load the sprite
	self.sprite = PIXI.Sprite.fromImage("../img/player_paddle.png");
	
	//place player paddle in X center of screen and 9/10ths of the way towards the bottom
	self.sprite.position.set(SCREEN_W/2, SCREEN_H*0.9);

	//draw from center
	self.sprite.anchor.set(0.5, 0.5);
	
	this.update = function(mouseX_)
	{
		if ( gameState === 'playing'){ 
			//console.log('mouseX = ' + mouseX_);
			self.sprite.position.x = mouseX_;
		}
	}
}