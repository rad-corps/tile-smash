//collision.js

//No strong typing in JS, we are relying on the caller of this function to make sure position, width and height properties are populated
function collisionCheck(sprite1, sprite2)
{
	//find left, right, top and bottom of sprite1
	var l1 = sprite1.position.x - sprite1.width /2;
	var r1 = sprite1.position.x + sprite1.width /2;
	var t1 = sprite1.position.y + sprite1.height /2;
	var b1 = sprite1.position.y - sprite1.height /2;
	var l2 = sprite2.position.x - sprite2.width /2;
	var r2 = sprite2.position.x + sprite2.width /2;
	var t2 = sprite2.position.y + sprite2.height /2;
	var b2 = sprite2.position.y - sprite2.height /2;

	if (r1 < l2 || r2 < l1 || b1 > t2 || t1 < b2){
		return false;
	}
	return true;
}