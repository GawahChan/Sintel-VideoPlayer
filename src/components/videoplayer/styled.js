import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
`;

export const VideoPlayerContainer = styled.div`
  position: relative;
  margin: 10px;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: darkgray;
  height: 3px;
`;

export const Bar = styled.div`
  background-color: red;
  height: 3px;
  width: ${props => props.Size || `2px`};
  z-index: 1;
`;
