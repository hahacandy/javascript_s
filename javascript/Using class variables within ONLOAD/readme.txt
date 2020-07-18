클래스변수 onload안에서 사용하기

class GameObject {
  constructor(sprites) {

    this.img = new Image();

    //아직 이미지 load 안된상태
    this.imgIsLoad = false;

    this.img.src = sprites.img;

    this.imgHeight = 0;
    this.imgWidth = 0;

    //이미지가 로드되면 true;
    (function(gameobject){
    	gameobject.img.onload = function(){
        gameobject.imgHeight = gameobject.img.naturalHeight;
        gameobject.imgWidth = gameobject.img.naturalWidth;

        gameobject.imgIsLoad = true;
    	};
    })(this);