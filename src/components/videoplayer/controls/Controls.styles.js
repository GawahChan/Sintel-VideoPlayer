import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  padding: 5px;
  box-sizing: border-box;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;
