import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import { PlayIcon, PauseIcon } from '../../common/styled';
import { Container, ControlsContainer } from './styled';

function Controls({ playVideo, toggleVideo, progressBar, seekVideo }) {
  return (
    <ControlsContainer>
      <Container>
        <ProgressBar status={progressBar} seekVideo={seekVideo} />
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
  progressBar: PropTypes.string,
  seekVideo: PropTypes.func
};
export default Controls;
