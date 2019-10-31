import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ProgressBarContainer,
  BarContainer,
  Bar,
  MarkerContainer,
  Marker
} from './styled';

function ProgressBar({ status, seekVideo }) {
  const progressBarRef = useRef(null);
  const constraintsRef = useRef(null);

  const progressBarPosition = event => {
    let offsetWidth = progressBarRef.current.offsetWidth;
    let videoPosition = (event.pageX - 20) / offsetWidth;
    seekVideo(videoPosition);
  };

  console.log('windows width', window.innerWidth);
  return (
    <ProgressBarContainer ref={progressBarRef}>
      <BarContainer onTap={event => progressBarPosition(event)} />
      <Bar Size={status} />
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
  status: PropTypes.string,
  seekVideo: PropTypes.func
};

export default ProgressBar;
