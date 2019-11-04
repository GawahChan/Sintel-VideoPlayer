import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  HotSpotContainer,
  Container,
  ModalBoxContainer,
  CanvasContainer,
  Canvas,
  TextContainer,
  Text,
  HotSpotIcon
} from './HotSpot.styles';

function HotSpot({
  updateProgressBar,
  progressBarWidth,
  hotSpotTimeStamp,
  hotSpotText
}) {
  const [hotSpotPosition, setHotSpotPosition] = useState(0);
  const [modalBoxPosition, setModalBoxPosition] = useState(0);
  const [displayModalBox, setDisplayModalBox] = useState(false);
  const canvasRef = useRef(null);

  const toggleModalBoxDisplay = () => {
    setDisplayModalBox(!displayModalBox);
  };

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

  return (
    <HotSpotContainer
      initial={{ opacity: -5 }}
      animate={{ x: hotSpotPosition, opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <Container>
        <ModalBoxContainer
          animate={{
            x: modalBoxPosition,
            opacity: displayModalBox ? 1 : 0,
            display: displayModalBox ? 'flex' : 'none'
          }}
          transition={{ duration: 0.5 }}
        >
          <CanvasContainer>
            <Canvas ref={canvasRef} />
          </CanvasContainer>
          <TextContainer>
            <Text>{hotSpotText}</Text>
          </TextContainer>
        </ModalBoxContainer>
        <HotSpotIcon
          onHoverStart={() => toggleModalBoxDisplay()}
          onHoverEnd={() => toggleModalBoxDisplay()}
          onTap={event => updateProgressBar(event)}
        />
      </Container>
    </HotSpotContainer>
  );
}

HotSpot.propTypes = {
  updateProgressBar: PropTypes.func,
  progressBarWidth: PropTypes.number,
  hotSpotTimeStamp: PropTypes.number,
  hotSpotText: PropTypes.string
};

export default HotSpot;
