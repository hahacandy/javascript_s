//사용하기 위해서는 mp4파일을 frag(조각) 해주어야함
	<script>
	
		var myVideo = document.getElementById("ani_view");

		var xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = function() {

			var reader = new FileReader();

			reader.onloadend = function() {

				var byteCharacters = atob(reader.result.slice(reader.result
						.indexOf(',') + 1));

				var byteNumbers = new Array(byteCharacters.length);
				for (var i = 0; i < byteCharacters.length; i++) {

					byteNumbers[i] = byteCharacters.charCodeAt(i);

				}
				var byteArray = new Uint8Array(byteNumbers);
				var blob = new Blob([ byteArray ], {
					type : 'video/mp4'
				});
				var url = URL.createObjectURL(blob);
				

				myVideo.src = url;
				
				myVideo.onplay = function() {
					//URL.revokeObjectURL(url); <- 이런식으로 하면 동영상을 직접적으로 다운로드 방지할꺼같은데 아직 자세하게는 모름..
				};

			}

			reader.readAsDataURL(xhr.response);

		};
		xhr.open('GET', 'http://localhost:8090/upload/130.mp4');
		xhr.send();

		
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