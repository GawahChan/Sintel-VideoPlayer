import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { PreviewBoxContainer, Canvas } from './PreviewBox.styles';

function ModalBox({ display, video, currentVideoTime }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height);
  }, [currentVideoTime, video]);

  console.log('display', display);
  return (
    <PreviewBoxContainer display={display ? 'flex' : 'none'}>
      <Canvas id="canvas" ref={canvasRef} />
    </PreviewBoxContainer>
  );
}

ModalBox.propTypes = {
  display: PropTypes.bool,
  video: PropTypes.object,
  currentVideoTime: PropTypes.number
};

export default ModalBox;
