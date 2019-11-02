import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { PreviewBoxContainer, Canvas } from './PreviewBox.styles';

function PreviewBox({ display, video, currentVideoTime, position }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height);
  }, [currentVideoTime, video]);

  return (
    <PreviewBoxContainer
      display={display ? 'flex' : 'none'}
      position={position}
    >
      <Canvas id="canvas" ref={canvasRef} />
    </PreviewBoxContainer>
  );
}

PreviewBox.propTypes = {
  display: PropTypes.bool,
  video: PropTypes.object,
  currentVideoTime: PropTypes.number,
  position: PropTypes.string
};

export default PreviewBox;
