import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarContainer, Bar } from './styled';

function ProgressBar({ status }) {
  console.log(status);
  return (
    <ProgressBarContainer>
      <Bar Size={status} />
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  status: PropTypes.string
};

export default ProgressBar;
