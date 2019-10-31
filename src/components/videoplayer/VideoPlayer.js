import React, { useState, useEffect, useRef } from 'react';
import { VideoPlayerContainer } from './styled';
import Controls from './Controls';

function VideoPlayer() {
  const [playVideo, setPlayVideo] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [progressBar, setProgressBar] = useState('0%');

  const video = useRef(HTMLVideoElement);

  const initialVideoTime = () => {
    let duration = Math.round(video.current.duration);
    setVideoDuration(duration);
  };
  const updateVideoTime = () => {
    let currentTime = Math.round(video.current.currentTime);
    let progressbar = `${(currentTime / videoDuration) * 100}%`;
    setCurrentVideoTime(currentTime);
    setProgressBar(progressbar);
  };

  const toggleVideo = () => setPlayVideo(!playVideo);

  useEffect(() => {
    playVideo ? video.current.play() : video.current.pause();
  }, [playVideo]);

  const seekVideo = event => {
    console.log('offsetWidth', event.target.offsetWidth);
    console.log('event.offsetx', event.offsetX);
    console.log('event.pageX', event.pageX);
    let pos =
      (event.offsetX / event.target.offsetWidth) * video.current.duration;
    console.log('position', pos);
    video.current.currentTime = pos;
  };

  console.log('currentVideoTime', currentVideoTime);
  console.log('progressbar', progressBar);

  return (
    <VideoPlayerContainer>
      <video
        id="videoplayer"
        src="http://peach.themazzone.com/durian/movies/sintel-2048-surround.mp4"
        width="100%"
        height="100%"
        ref={video}
        onLoadedMetadata={() => initialVideoTime()}
        onTimeUpdate={() => updateVideoTime()}
      />
      <Controls
        playVideo={playVideo}
        toggleVideo={toggleVideo}
        progressBar={progressBar}
        seekVideo={seekVideo}
      />
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
