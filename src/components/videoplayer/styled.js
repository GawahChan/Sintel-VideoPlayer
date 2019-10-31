import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const ProgressBarContainer = styled(motion.div)`
  width: 100%;
  background-color: darkgray;
  height: 3px;
`;

export const Bar = styled(motion.div)`
  position: relative;
  background-color: red;
  height: 3px;
  width: ${props => props.Size || `2px`};
`;

export const Marker = styled.div`
  position: absolute;
  right: -5px;
  top: -3px;
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  z-index: 1;
`;
