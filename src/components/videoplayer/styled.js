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
  padding: 10px;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 4px;
`;

export const BarContainer = styled(motion.div)`
  position: absolute;
  background-color: darkgray;
  height: 100%;
  width: 100%;
`;

export const Bar = styled(motion.div).attrs(props => ({
  style: {
    width: props.Size || '0%'
  }
}))`
  background-color: red;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const MarkerContainer = styled.div`
  position: relative;
  background-color: red;
`;

export const Marker = styled(motion.div)`
  position: absolute;
  top: -3px;
  left: 0;
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
`;
