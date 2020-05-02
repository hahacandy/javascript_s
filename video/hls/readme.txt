//hls용
ffmpeg -i filename.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls filename.m3u8

//60프레임으로 만들어줌(더 부드럽게 하는거 같긴한데 더 지켜봐야 알듯)
ffmpeg.exe -i "inputMovie.mp4" -vf "minterpolate=60:2:0:1:8:16:32:0:1:5" -c:v mpeg4 -q:v 1 outputMovie.mp4