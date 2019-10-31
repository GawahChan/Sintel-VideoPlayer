import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import { PlayIcon, PauseIcon } from '../../common/styled';
import { Container, ControlsContainer } from './styled';

function Controls({
  playVideo,
  toggleVideo,
  seekVideo,
  videoDuration,
  progressBarSize
}) {
  return (
    <ControlsContainer>
      <Container>
        <ProgressBar
          seekVideo={seekVideo}
          videoDuration={videoDuration}
          progressBarSize={progressBarSize}
        />
      </Container>
      <Container>
        {playVideo ? (
          <PauseIcon onClick={() => toggleVideo()} />
        ) : (
          <PlayIcon onClick={() => toggleVideo()} />
        )}
      </Container>
    </ControlsContainer>
  );
}

Controls.propTypes = {
  playVideo: PropTypes.bool,
  toggleVideo: PropTypes.func,
  seekVideo: PropTypes.func,
  videoDuration: PropTypes.number,
  progressBarSize: PropTypes.string
};
export default Controls;
