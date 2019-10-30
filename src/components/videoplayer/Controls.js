import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import { PlayIcon, PauseIcon } from '../../common/styled';
import { Container, ControlsContainer } from './styled';

function Controls({ playVideo, toggleVideo, progressBar }) {
  return (
    <ControlsContainer>
      <Container>
        <ProgressBar status={progressBar} />
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
  progressBar: PropTypes.string
};
export default Controls;
