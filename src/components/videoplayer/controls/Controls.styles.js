import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ControlsContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;

  box-sizing: border-box;
  padding: 10px;

  color: white;
`;

export const Container = styled.div`
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
`;
