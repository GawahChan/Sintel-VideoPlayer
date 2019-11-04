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
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 15px 5px 15px;
  box-sizing: border-box;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
`;
