import styled from 'styled-components';

export const PreviewBoxContainer = styled.div.attrs(props => ({
  style: {
    display: props.display
  }
}))`
  justify-content: center;
  align-content: center;

  position: absolute;
  top: -110px;
  left: -75px;
  right: 0;
  height: 100px;
  width: 150px;
  box-sizing: border-box;
  border: 2px solid black;
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
