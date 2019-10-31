import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ProgressBarContainer, Bar, Marker } from './styled';

function ProgressBar({ status, seekVideo }) {
  const constraintsRef = useRef(null);

  return (
    <ProgressBarContainer
      ref={constraintsRef}
      onTap={event => seekVideo(event)}
    >
      <Bar Size={status} onTap={event => console.log('bar event', event)}>
        <Marker
        // drag="x"
        // dragConstraints={constraintsRef}
        // dragElastic={0}
        // onDrag={(event, info) => console.log('event', event)}
        />
      </Bar>
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  status: PropTypes.string,
  seekVideo: PropTypes.func
};

export default ProgressBar;
