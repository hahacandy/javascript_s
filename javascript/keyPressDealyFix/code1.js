//밑에 같이 하는이유는
//방향키를 누르다가 다른 방향키로 누르면 1초간 지연이 생기기때문
var keyState = {};
window.addEventListener('keydown',function(e){
	keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
	keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {
	if (keyState[37]){
		player.setTarget(player.x - player.speed, null);
	}
		if (keyState[38]){
		player.setTarget(null, player.y - player.speed);
	}
	if (keyState[39]){
		player.setTarget(player.x + player.speed, null);
	}
		if (keyState[40]){
		player.setTarget(null, player.y + player.speed);
	}
	setTimeout(gameLoop, 10);
}
gameLoop();