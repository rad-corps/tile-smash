//PlayerPaddle.js

function PlayerPaddle(){
	var self = this;

	self.sprite = PIXI.Sprite.fromImage("../img/player_paddle.png");
	
	self.sprite.position.set(SCREEN_W/2, SCREEN_H*0.9);
	
	//TODO check for player input (keyboard, mouse, touch)
	this.update = function()
	{
		if ( gameState === 'playing'){ 

		}
	}
}