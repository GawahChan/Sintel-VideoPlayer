import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ProgressBarContainer,
  BarContainer,
  Bar,
  MarkerContainer,
  Marker
} from './styled';

function ProgressBar({ seekVideo, videoDuration, progressBarSize }) {
  const progressBarRef = useRef(null);
  const constraintsRef = useRef(null);

  const progressBarPosition = event => {
    let offsetWidth = progressBarRef.current.offsetWidth;
    let videoPosition = (event.pageX - 25) / offsetWidth;

    let newVideoTime = videoPosition * videoDuration;
    let newProgressBar = `${videoPosition * 100}%`;

    seekVideo(newVideoTime, newProgressBar);
  };

  return (
    <ProgressBarContainer ref={progressBarRef}>
      <BarContainer onTap={event => progressBarPosition(event)} />
      <Bar Size={progressBarSize} />
      <MarkerContainer ref={constraintsRef}>
        <Marker
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={event => progressBarPosition(event)}
        />
      </MarkerContainer>
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  seekVideo: PropTypes.func,
  videoDuration: PropTypes.number,
  progressBarSize: PropTypes.string
};

export default ProgressBar;
