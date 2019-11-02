import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  HotSpotContainer,
  Container,
  ModalBoxContainer,
  CanvasContainer,
  Canvas,
  Text,
  HotSpotIcon
} from './HotSpot.styles';

function HotSpot({ progressBarWidth, hotSpotTimeStamp, hotSpotText }) {
  const [hotSpotPosition, setHotSpotPosition] = useState(0);
  const [modalBoxPosition, setModalBoxPosition] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const HotSpotThumbNail = () => {
      const video = document.createElement('video');
      video.src =
        'http://peach.themazzone.com/durian/movies/sintel-2048-surround.mp4';

      video.addEventListener('loadeddata', () => {
        getThumbnail(video);
      });

      video.addEventListener('seeked', () => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        positionHotSpot();
        positionModalBox();
      });

      const getThumbnail = () => {
        video.currentTime = hotSpotTimeStamp + 4;
      };

      const positionHotSpot = () => {
        const duration = Math.round(video.duration);

        let position = Math.floor(
          (progressBarWidth / duration) * hotSpotTimeStamp
        );
        setHotSpotPosition(position);
      };

      const positionModalBox = () => {
        let videoLeftBoundary = 100;
        let videoRightBoundary = progressBarWidth - 100;

        let modalBoxCenterPosition = '-100px';
        let modalBoxLeftPosition = `-${hotSpotPosition}px`;
        let modalBoxRightPosition = `${progressBarWidth -
          hotSpotPosition -
          200}px`;

        let position =
          hotSpotPosition < videoLeftBoundary
            ? modalBoxLeftPosition
            : hotSpotPosition > videoRightBoundary
            ? modalBoxRightPosition
            : modalBoxCenterPosition;

        setModalBoxPosition(position);
      };
    };

    HotSpotThumbNail();
  }, [hotSpotPosition, hotSpotTimeStamp, progressBarWidth]);

  console.log('position', hotSpotPosition);

  return (
    <HotSpotContainer position={hotSpotPosition}>
      <Container>
        <ModalBoxContainer position={modalBoxPosition}>
          <CanvasContainer>
            <Canvas ref={canvasRef} />
          </CanvasContainer>
          <Text>{hotSpotText}</Text>
        </ModalBoxContainer>
        <HotSpotIcon />
      </Container>
    </HotSpotContainer>
  );
}

HotSpot.propTypes = {
  progressBarWidth: PropTypes.number,
  hotSpotTimeStamp: PropTypes.number,
  hotSpotText: PropTypes.string
};

export default HotSpot;
