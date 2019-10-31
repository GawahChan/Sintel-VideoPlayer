import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  padding: 5px;
  box-sizing: border-box;
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
  position: relative;
  width: 100%;
  background-color: darkgray;
  color: red;

  height: 7px;
  cursor: pointer;
`;

export const Bar = styled(motion.div)`
  position: absolute;
  background-color: red;
  height: 100%;
  width: ${props => props.Size || `2px`};
  pointer-events: none;
`;

export const Marker = styled.div`
  position: absolute;
  right: -5px;
  top: -4px;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
`;
