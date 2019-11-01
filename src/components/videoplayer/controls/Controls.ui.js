import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progressbar/ProgressBar.ui';
import { PlayIcon, PauseIcon } from '../../../common/styled';
import { Container, ControlsContainer } from './Controls.styles';

function Controls({
  playVideo,
  toggleVideo,
  seekVideo,
  videoDuration,
  progressBarSize,
  video,
  currentVideoTime
}) {
  return (
    <ControlsContainer>
      <Container>
        {/* <ModalBox video={video} currentVideoTime={currentVideoTime} /> */}
        <ProgressBar
          seekVideo={seekVideo}
          videoDuration={videoDuration}
          progressBarSize={progressBarSize}
          video={video}
          currentVideoTime={currentVideoTime}
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
  progressBarSize: PropTypes.string,
  video: PropTypes.object,
  currentVideoTime: PropTypes.number
};
export default Controls;
