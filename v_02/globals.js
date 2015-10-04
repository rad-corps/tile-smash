//globals.js
var gameState = 'loading'; //'playing', 'gameOver', 'loading'
var gameLoop = null;

//constant globals
const SCREEN_W = 1024;
const SCREEN_H = 668;
const FONT_STYLE = {
	align: 'center',
    font : '20px Arial bold italic',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};