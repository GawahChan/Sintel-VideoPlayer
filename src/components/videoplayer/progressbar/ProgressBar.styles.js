import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  z-index: 2;
`;
