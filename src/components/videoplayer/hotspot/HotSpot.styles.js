import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HotSpotContainer = styled(motion.div)`
  position: absolute;
  z-index: 2;
`;

export const Container = styled.div`
  position: relative;
`;

export const ModalBoxContainer = styled(motion.div)`
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: -210px;

  height: 200px;
  border: 2px solid #232b2b;
  border-radius: 5px;
  background-color: #232b2b;
  overflow: hidden;
`;

export const CanvasContainer = styled.div`
  height: 150px;
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

export const HotSpotIcon = styled(motion.div)`
  position: absolute;
  background-image: url(${require('../../../common/icons/HotSpotIcon.svg')});
  background-color: transparent;
  background-size: cover;
  background-position: center;
  height: 15px;
  width: 15px;
  top: -7px;
  left: -5px;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 5px;
`;

export const Text = styled.p`
  margin: 0;
  text-align: center;
`;
