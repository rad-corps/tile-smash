//globals.js
var gameState = 'loading'; //'playing', 'gameOver', 'loading'
var gameLoop = null;

//constant globals
const SCREEN_W = 1024;
const SCREEN_H = 668;
const BLOCK_W_SPACING = 70;
const BLOCK_H_SPACING = 20;
const BLOCK_ROWS = 10;
const BLOCK_COLS = 13;
const BLOCK_X_MARGIN = 90;
const BLOCK_Y_MARGIN = 50;
const BALL_MAX_Y_VELOCITY = 10;
const BALL_VELCITY_INCREASER = 0.2;

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