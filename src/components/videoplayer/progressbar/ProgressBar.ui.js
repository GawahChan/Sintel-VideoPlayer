import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ProgressBarContainer,
  BarContainer,
  Bar,
  MarkerContainer,
  Marker
} from './ProgressBar.styles';
import ModalBox from '../modalbox/PreviewBox.ui';

function ProgressBar({
  seekVideo,
  videoDuration,
  progressBarSize,
  video,
  currentVideoTime
}) {
  const [displayPreview, setDisplayPreview] = useState(false);
  const progressBarRef = useRef(null);
  const constraintsRef = useRef(null);

  const progressBarPosition = event => {
    let offsetWidth = progressBarRef.current.offsetWidth;
    let clickedPosition =
      offsetWidth > 2000 ? event.pageX - 125 : event.pageX - 25;
    let videoPosition = clickedPosition / offsetWidth;

    let newVideoTime = videoPosition * videoDuration;
    let newProgressBar = `${videoPosition * 100}%`;

    console.log('offsetWidth', offsetWidth);
    console.log('event.pageX', event.pageX);
    seekVideo(newVideoTime, newProgressBar);
  };

  const togglePreview = () => {
    setDisplayPreview(!displayPreview);
  };

  return (
    <ProgressBarContainer ref={progressBarRef}>
      <BarContainer onTap={event => progressBarPosition(event)} />
      <Bar Size={progressBarSize} />
      <MarkerContainer ref={constraintsRef}>
        <ModalBox
          display={displayPreview}
          video={video}
          currentVideoTime={currentVideoTime}
        />
        <Marker
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={event => progressBarPosition(event)}
          onDragStart={() => togglePreview()}
          onDragEnd={() => togglePreview()}
          whileHover={() => togglePreview()}
          onHoverEnd={() => togglePreview()}
        />
      </MarkerContainer>
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  seekVideo: PropTypes.func,
  videoDuration: PropTypes.number,
  progressBarSize: PropTypes.string,
  video: PropTypes.object,
  currentVideoTime: PropTypes.number
};

export default ProgressBar;
