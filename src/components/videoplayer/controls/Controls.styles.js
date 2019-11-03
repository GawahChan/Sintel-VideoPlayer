import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  padding: 5px;
  box-sizing: border-box;
`;

export const ControlsContainer = styled.div.attrs(props => ({
  style: {
    bottom: props.displayControls ? '0px' : '-150px'
  }
}))`
  position: absolute;
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  transition: bottom 1s ease;
`;
