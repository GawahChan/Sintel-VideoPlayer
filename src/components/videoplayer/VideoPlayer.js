import React, { useState, useEffect, useRef } from 'react';
import { VideoPlayerContainer } from './styled';
import Controls from './Controls';

function VideoPlayer() {
  const [playVideo, setPlayVideo] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [progressBarSize, setProgressBarSize] = useState('0%');

  const video = useRef(HTMLVideoElement);

  const toggleVideo = () => setPlayVideo(!playVideo);

  useEffect(() => {
    playVideo ? video.current.play() : video.current.pause();
  }, [playVideo]);

  const initialVideoTime = () => {
    let duration = Math.round(video.current.duration);
    setVideoDuration(duration);
  };

  const updateVideoTime = () => {
    let currentTime = Math.round(video.current.currentTime);
    setCurrentVideoTime(currentTime);

    let progressbar = `${(currentTime / videoDuration) * 100}%`;
    setProgressBarSize(progressbar);
  };

  const seekVideo = (newVideoTime, newProgressBar) => {
    video.current.currentTime = newVideoTime;
    setProgressBarSize(newProgressBar);
  };

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
        seekVideo={seekVideo}
        videoDuration={videoDuration}
        progressBarSize={progressBarSize}
      />
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
