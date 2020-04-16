<script src="//cdn.jsdelivr.net/hls.js/latest/hls.min.js"></script>
  <video id="video" controls></video>

  <script type="text/javascript">
    var video = document.getElementById("video");
    var videoSrcInHls = "https://www.jenrenalcare.com/upload/poanchen.github.io/sample-code/2016/11/17/how-to-play-mp4-video-using-hls/sample.m3u8";
    var videoSrcInMp4 = "https://www.jenrenalcare.com/upload/poanchen.github.io/sample-code/2016/11/17/how-to-play-mp4-video-using-hls/sample.mp4";

    if(Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrcInHls);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    }else{
      addSourceToVideo(video, videoSrcInMp4, 'video/mp4');
      video.play();
    }

    function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }
  </script>