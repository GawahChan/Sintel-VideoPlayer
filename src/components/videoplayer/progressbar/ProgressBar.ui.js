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
  const [previewBoxPosition, setPreviewBoxPosition] = useState('0px');
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const progressBarRef = useRef(HTMLDivElement);
  const constraintsRef = useRef(HTMLDivElement);

  useEffect(() => {
    let newWidth = progressBarRef.current.offsetWidth;
    setProgressBarWidth(newWidth);
  }, [progressBarRef.current.offsetWidth]);

  const progressBarPosition = (event, action) => {
    togglePreview(event, action);
    let videoMargin = Math.round((window.innerWidth - progressBarWidth) / 2);

    let clickedPosition = event.pageX - videoMargin;
    let videoPosition = clickedPosition / progressBarWidth;

    let newVideoTime = videoPosition * videoDuration;
    let newProgressBar = `${videoPosition * 100}%`;

    seekVideo(newVideoTime, newProgressBar);
  };

  const togglePreview = (event, action) => {
    let markerPosition = event.pageX;
    let videoMargin = Math.round((window.innerWidth - progressBarWidth) / 2);

    let previewBoxCenter = 75;
    let previewBoxLeft = markerPosition - videoMargin;
    let previewBoxRight =
      markerPosition - progressBarWidth - videoMargin + previewBoxCenter * 2;

    let previewBoxLeftBoundary = previewBoxCenter + videoMargin;
    let previewBoxRightBoundary = progressBarWidth - previewBoxCenter;

    let newPreviewBoxPosition =
      markerPosition < previewBoxLeftBoundary
        ? `-${previewBoxLeft}px`
        : markerPosition > previewBoxRightBoundary
        ? `-${previewBoxRight}px`
        : `-${previewBoxCenter}px`;

    let displayPreview =
      action === 'OnDrag'
        ? true
        : action === 'OnDragEnd'
        ? false
        : action === 'HoverStart'
        ? true
        : action === 'HoverEnd'
        ? false
        : false;

    setPreviewBoxPosition(newPreviewBoxPosition);
    setDisplayPreview(displayPreview);
  };

  return (
    <ProgressBarContainer ref={progressBarRef}>
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={25}
        hotSpotText="Skip to beginning!"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={148}
        hotSpotText="Flashback Scene"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={345}
        hotSpotText="Epic Journey Montage"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={539}
        hotSpotText="Dracarys!"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={736}
        hotSpotText="Skip to credits!"
      />
      <HotSpot
        updateProgressBar={progressBarPosition}
        progressBarWidth={progressBarWidth}
        hotSpotTimeStamp={885}
        hotSpotText="Check out sintel.org for more info about this film!"
      />
      <BarContainer onTap={event => progressBarPosition(event)} />
      <Bar Size={progressBarSize} />
      <MarkerContainer ref={constraintsRef}>
        <PreviewBox
          display={displayPreview}
          video={video}
          currentVideoTime={currentVideoTime}
          position={previewBoxPosition}
        />
        <Marker
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={event => progressBarPosition(event, 'OnDrag')}
          onDragEnd={event => togglePreview(event, 'OnDragEnd')}
          onHoverStart={event => togglePreview(event, 'HoverStart')}
          onHoverEnd={event => togglePreview(event, 'HoverEnd')}
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
