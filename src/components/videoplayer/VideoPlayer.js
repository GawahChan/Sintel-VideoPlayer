import React, { useState, useEffect, useRef } from 'react';
import { VideoPlayerContainer } from './styled';
import Controls from './Controls';

function VideoPlayer() {
  const [playVideo, setPlayVideo] = useState(false);
  const [progressBar, setProgressBar] = useState('0%');
  const video = useRef(HTMLVideoElement);

  const toggleVideo = () => setPlayVideo(!playVideo);

  useEffect(() => {
    playVideo ? updateVideo('play') : updateVideo('pause');
  }, [playVideo]);

  const updateVideo = action => {
    let updateTime = () => {
      let currentTime = video.current.currentTime;
      let duration = video.current.duration;

      let progressbar = `${(currentTime / duration) * 100}%`;
      setProgressBar(progressbar);
    };

    let updateInterval = setInterval(updateTime, 1000);

    if (action === 'play') {
      video.current.play();
    } else {
      video.current.pause();
      clearInterval(updateInterval);
    }
  };
  return (
    <VideoPlayerContainer>
      <video
        id="videoplayer"
        src="http://peach.themazzone.com/durian/movies/sintel-2048-surround.mp4"
        width="100%"
        height="100%"
        ref={video}
      />
      <Controls
        playVideo={playVideo}
        toggleVideo={toggleVideo}
        progressBar={progressBar}
      />
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
