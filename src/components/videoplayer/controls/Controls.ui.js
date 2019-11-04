import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../progressbar/ProgressBar.ui';
import getTime from '../../../helpers/GetTime';
import {
  PlayIcon,
  PauseIcon,
  FullScreenIcon,
  SmallScreenIcon
} from '../../../common/icons/styled';
import {
  ControlsContainer,
  Container,
  ButtonsContainer
} from './Controls.styles';
import { Text } from '../../../styles';

function Controls({
  playVideo,
  displayControls,
  toggleVideo,
  seekVideo,
  progressBarSize,
  video,
  videoDuration,
  currentVideoTime
}) {
  const [displayFullScreen, setDisplayFullScreen] = useState(false);
  const [displayedVideoTime, setDisplayedVideoTime] = useState('00:00');
  const [displayedVideoDuration, setDisplayedVideoDuration] = useState('00:00');

  useEffect(() => {
    let newDisplayedTime = getTime(currentVideoTime);
    setDisplayedVideoTime(newDisplayedTime);
  }, [currentVideoTime]);

  useEffect(() => {
    let newDisplayedVideoDuration = getTime(videoDuration);
    setDisplayedVideoDuration(newDisplayedVideoDuration);
  }, [videoDuration]);

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
    <ControlsContainer
      animate={{ opacity: displayControls ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      <Container>
        <ProgressBar
          seekVideo={seekVideo}
          videoDuration={videoDuration}
          progressBarSize={progressBarSize}
          video={video}
          currentVideoTime={displayedVideoTime}
        />
      </Container>
      <ButtonsContainer>
        <Container>
          {playVideo ? (
            <PauseIcon onClick={() => toggleVideo()} />
          ) : (
            <PlayIcon onClick={() => toggleVideo()} />
          )}
          <Container>
            <Text>{`${displayedVideoTime}/${displayedVideoDuration}`}</Text>
          </Container>
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
  progressBarSize: PropTypes.string,
  video: PropTypes.object,
  videoDuration: PropTypes.number,
  currentVideoTime: PropTypes.number
};
export default Controls;
