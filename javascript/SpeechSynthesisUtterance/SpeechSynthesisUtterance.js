var msg = new SpeechSynthesisUtterance();
var text = document.getElementById('text').value;
msg.volume = 1; //ボリューム
msg.rate = 1;  //レート
msg.pitch = 1; //ピッチ
msg.text = text;
msg.lang = 'ja-JP'; //言語
window.speechSynthesis.speak(msg);


//http://blog.e-riverstyle.com/2015/01/web-speech-apitts.html