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

			//handle ball/edge of the screen collision
			if ( self.sprite.position.x <= 0 )
			{
				self.velocity._x = -self.velocity._x;
			}
			if ( self.sprite.position.x >= SCREEN_W )
			{
				self.velocity._x = -self.velocity._x;
			}
			if ( self.sprite.position.y <= 0 )
			{
				self.velocity._y = -self.velocity._y;
			}
			if ( self.sprite.position.y >= SCREEN_H )
			{
				self.velocity._y = -self.velocity._y;
			}
		}
	}

	this.onPlayerCollision = function(playerSprite_)
	{
		//what part of the playerSprite did we hit?

		//where is the player sprite? 
		var playerSpritePos = playerSprite_.position.x;
		console.log('player pos: ' + playerSpritePos);

		//where is the ball sprite
		var ballSpritePos = self.sprite.position.x;
		console.log('ball sprite: ' + ballSpritePos);

		//what is the difference?
		var difference = playerSpritePos - ballSpritePos;
		console.log('difference: ' + (difference));

		//maximum difference is --
		// player_w + ball_w / 2 = (64 + 16) / 2 = 80 / 2 = 40
		//scale the difference to to the range -1 to 1
		difference /= 40;
		difference *= 6;

		//calculate new x velocity
		self.velocity._x = -difference;
		self.velocity._y = -self.velocity._y;

		
		
	}

	this.onBlockCollision = function(blockSprite_)
	{
		var collisionSide = checkCollisionSide(self.sprite, blockSprite_);

		switch(collisionSide) {
    		case 'below':
    		case 'above':
        		self.velocity._y = -self.velocity._y;
        	break;
        	case 'left':
        	case 'right':
        		self.velocity._x = -self.velocity._x;
        	break;
		}

		//if y velocity is not at max, increase it
		if ( self.velocity._y < BALL_MAX_Y_VELOCITY && self.velocity._y > -BALL_MAX_Y_VELOCITY)
		{
			//increase velocity slightly 
			if ( self.velocity._y < 0 )
				self.velocity._y -= BALL_VELCITY_INCREASER;
			else 
				self.velocity._y += BALL_VELCITY_INCREASER;
		}
		console.log('self.velocity._y: ' + self.velocity._y);
	}
}
