//Ball.js

//block num range from 0 to 6 inclusive
function Ball(){
	var self = this;

	//load the sprite
	self.sprite = PIXI.Sprite.fromImage("../img/ball.png");
	
	//place ball in centre of screen
	self.sprite.position.set(SCREEN_W/2, SCREEN_H/2);

	//draw from center
	self.sprite.anchor.set(0.5, 0.5);

	//the velocity of the ball
	self.velocity = vector2.create(0,3);
	
	this.update = function()
	{
		if ( gameState === 'playing'){ 
			//move ball
			self.sprite.position.x += self.velocity._x;
			self.sprite.position.y += self.velocity._y;
		}
	}

	this.onPlayerCollision = function()
	{
		self.velocity._y = -self.velocity._y;
	}
}
