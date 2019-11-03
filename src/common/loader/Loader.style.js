import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  height: 100%;
  width: 100%;
  background-color: black;
  pointer-events: none;
`;

export const StyledLoader = styled(motion.div)`
  border: 10px solid lightgray;
  border-top: 10px solid red;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;
