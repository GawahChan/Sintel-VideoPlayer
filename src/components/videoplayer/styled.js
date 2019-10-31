import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
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

export const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 7px;
`;

export const BarContainer = styled(motion.div)`
  position: absolute;
  background-color: darkgray;
  height: 100%;
  width: 100%;
`;

export const Bar = styled(motion.div)`
  background-color: red;
  height: 100%;
  width: ${props => props.Size || `2px`};
  pointer-events: none;
  z-index: 1;
`;

export const MarkerContainer = styled.div`
  position: relative;
`;

export const Marker = styled(motion.div)`
  top: -4px;
  right: -3px;
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
`;
