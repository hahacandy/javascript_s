//사용하기 위해서는 mp4파일을 frag(조각) 해주어야함
MP4Box -dash 5000 -frag 5000 -rap "동영상이름.mp4"

<script type="text/javascript">


	var video = document.getElementById("ani_view_src");

	var assetURL = '동영상주소.mp4';
	// Need to be specific for Blink regarding codecs 
	// ./mp4info frag_bunny.mp4 | grep Codec     
	// video/mp4; codecs="avc1.42E01E, mp4a.40.2    
	//var mimeCodec = 'video/webm;codecs="vorbis,vp8"';     
	var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
	if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
		var mediaSource = new MediaSource();
		video.src = URL.createObjectURL(mediaSource);
		mediaSource.addEventListener('sourceopen', sourceOpen);
	} else {
		console.error('Unsupported MIME type or codec: ', mimeCodec);
	}

	function sourceOpen() {
		console.log(this); // open      
		var mediaSource = this;
		var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
		fetchAB(assetURL, function(buf) {
			console.log(buf) ;
			console.log(sourceBuffer);
			sourceBuffer.addEventListener('updateend', function() {
				console.log(mediaSource);
				if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
					mediaSource.endOfStream();
					video.play();
					console.log(mediaSource.readyState); // ended   
				  }
				
				 
			});
			sourceBuffer.appendBuffer(buf);
		});
	};

	function fetchAB(url, cb) {
		console.log(url);
		var xhr = new XMLHttpRequest;
		xhr.open('get', url);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function() {
			console.log(xhr.response);
			cb(xhr.response);
		};
		xhr.send();
	};

</script>


//이미지인데 이건 아직 안써봄
<script>
fetch('이미지 url', {
})
.then((response) => response.blob())
.then((blob) => {
    const imageUrl = URL.createObjectURL(blob);
    const img = document.querySelector('img');
    img.addEventListener('load', () => URL.revokeObjectURL(imageUrl));
    document.getElementById('i1').src = imageUrl;
});
</script>