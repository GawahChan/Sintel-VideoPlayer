import styled from 'styled-components';

export const HotSpotContainer = styled.div.attrs(props => ({
  style: {
    display: props.postion ? 'none' : 'auto',
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
    left: props.position
  }
}))`
  position: absolute;
  top: -210px;
  height: 200px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
  z-index: 1;
`;

export const CanvasContainer = styled.div`
  height: 150px;
  width: 200px;
  border-bottom: 2px solid black;
`;

export const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

export const HotSpotIcon = styled.div`
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
  pointer-events: none;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0;
`;
