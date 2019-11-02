import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import HotSpot from '../hotspot/HotSpot.ui';
import PreviewBox from '../previewbox/PreviewBox.ui';
import {
  ProgressBarContainer,
  BarContainer,
  Bar,
  MarkerContainer,
  Marker
} from './ProgressBar.styles';

function ProgressBar({
  seekVideo,
  videoDuration,
  progressBarSize,
  video,
  currentVideoTime
}) {
  const [displayPreview, setDisplayPreview] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const progressBarRef = useRef(HTMLDivElement);
  const constraintsRef = useRef(HTMLDivElement);

  useEffect(() => {
    let newWidth = progressBarRef.current.offsetWidth;
    setProgressBarWidth(newWidth);
  }, [progressBarRef.current.offsetWidth]);

  const progressBarPosition = event => {
    let clickedPosition =
      progressBarWidth > 2000 ? event.pageX - 125 : event.pageX - 25;
    let videoPosition = clickedPosition / progressBarWidth;

    let newVideoTime = videoPosition * videoDuration;
    let newProgressBar = `${videoPosition * 100}%`;

    seekVideo(newVideoTime, newProgressBar);
  };

  const togglePreview = () => {
    setDisplayPreview(!displayPreview);
  };

  console.log('progressBarWidth', progressBarWidth);
  console.log('currentTIme', currentVideoTime);

  return (
    <ProgressBarContainer ref={progressBarRef}>
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={25}
        hotSpotText="Winter has come!"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={736}
        hotSpotText="Credits!"
      />
      <BarContainer onTap={event => progressBarPosition(event)} />
      <Bar Size={progressBarSize} />
      <MarkerContainer ref={constraintsRef}>
        <PreviewBox
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
