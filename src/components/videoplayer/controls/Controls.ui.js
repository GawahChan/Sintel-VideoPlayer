import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progressbar/ProgressBar.ui';
import {
  PlayIcon,
  PauseIcon,
  FullScreenIcon,
  SmallScreenIcon
} from '../../../common/styled';
import {
  ControlsContainer,
  Container,
  ButtonsContainer
} from './Controls.styles';

function Controls({
  playVideo,
  displayControls,
  toggleVideo,
  seekVideo,
  videoDuration,
  progressBarSize,
  video,
  currentVideoTime
}) {
  const [displayFullScreen, setDisplayFullScreen] = useState(false);

  const toggleScreenIcon = () => {
    setDisplayFullScreen(!displayFullScreen);
  };

  const toggleFullScreen = () => {
    let videoContainer = video.current.parentElement;
    let fullScreen = document.fullscreenElement ? true : false;

    const openFullScreen = () => {
      videoContainer.mozRequestFullScreen
        ? videoContainer.mozRequestFullScreen()
        : videoContainer.webkitRequestFullscreen
        ? videoContainer.webkitRequestFullscreen()
        : videoContainer.msRequestFullscreen
        ? videoContainer.msRequestFullscreen()
        : videoContainer.requestFullscreen();
    };

    const cancelFullScreen = () => {
      document.mozCancelFullScreen
        ? document.moxCancelFullSCreen()
        : document.webkitExitFullscreen
        ? document.webkitExitFullscreen()
        : document.msExitFullscreen
        ? document.msExitFullScreen()
        : document.exitFullscreen();
    };

    fullScreen ? cancelFullScreen() : openFullScreen();
    toggleScreenIcon();
  };

  return (
    <ControlsContainer displayControls={displayControls}>
      <Container>
        <ProgressBar
          seekVideo={seekVideo}
          videoDuration={videoDuration}
          progressBarSize={progressBarSize}
          video={video}
          currentVideoTime={currentVideoTime}
        />
      </Container>
      <ButtonsContainer>
        <Container>
          {playVideo ? (
            <PauseIcon onClick={() => toggleVideo()} />
          ) : (
            <PlayIcon onClick={() => toggleVideo()} />
          )}
        </Container>
        <Container>
          {displayFullScreen ? (
            <SmallScreenIcon onClick={() => toggleFullScreen()} />
          ) : (
            <FullScreenIcon onClick={() => toggleFullScreen()} />
          )}
        </Container>
      </ButtonsContainer>
    </ControlsContainer>
  );
}

Controls.propTypes = {
  playVideo: PropTypes.bool,
  displayControls: PropTypes.bool,
  toggleVideo: PropTypes.func,
  seekVideo: PropTypes.func,
  videoDuration: PropTypes.number,
  progressBarSize: PropTypes.string,
  video: PropTypes.object,
  currentVideoTime: PropTypes.number
};
export default Controls;
