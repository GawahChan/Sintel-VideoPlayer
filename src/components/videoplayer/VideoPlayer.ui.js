import React, { useState, useEffect, useRef } from 'react';
import { VideoPlayerContainer, Video } from './VideoPlayer.styles';
import Controls from './controls/Controls.ui';

function VideoPlayer() {
  const [playVideo, setPlayVideo] = useState(false);
  const [displayControls, setDisplayControls] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [progressBarSize, setProgressBarSize] = useState('0%');

  const video = useRef(HTMLVideoElement);

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

  const toggleVideo = () => setPlayVideo(!playVideo);

  const toggleControls = action => {
    let display =
      action === 'Clicked'
        ? !displayControls
        : action === 'HoverStart'
        ? true
        : action === 'HoverEnd'
        ? false
        : false;
    setDisplayControls(display);
  };

  return (
    <VideoPlayerContainer
      onHoverStart={() => toggleControls('HoverStart')}
      onHoverEnd={() => toggleControls('HoverEnd')}
    >
      <Video
        src="http://peach.themazzone.com/durian/movies/sintel-2048-surround.mp4"
        ref={video}
        onLoadedMetadata={() => initialVideoTime()}
        onTimeUpdate={() => updateVideoTime()}
        onClick={() => toggleControls('Clicked')}
      />
      <Controls
        playVideo={playVideo}
        displayControls={displayControls}
        toggleVideo={toggleVideo}
        seekVideo={seekVideo}
        videoDuration={videoDuration}
        progressBarSize={progressBarSize}
        video={video}
        currentVideoTime={currentVideoTime}
      />
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
