import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HotSpotContainer = styled.div.attrs(props => ({
  style: {
    left: `${props.position}px`
  }
}))`
  position: absolute;
`;

export const Container = styled.div`
  position: relative;
`;

export const ModalBoxContainer = styled.div.attrs(props => ({
  style: {
    left: props.position,
    display: props.toggleDisplay ? 'flex' : 'none'
  }
}))`
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: -210px;

  height: 200px;
  border: 2px solid #232b2b;
  border-radius: 5px;
  background-color: #232b2b;
  overflow: hidden;
  z-index: 1;
`;

export const CanvasContainer = styled.div`
  height: 150px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid black;
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
  z-index: 2;
`;

export const Text = styled.p`
  flex: 1;
  margin: 0;

  text-align: center;
  padding: 10px;
  box-sizing: border-box;
`;
