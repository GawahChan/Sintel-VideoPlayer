import styled from 'styled-components';

export const PreviewBoxContainer = styled.div.attrs(props => ({
  style: {
    display: props.display,
    left: props.position || '-75px'
  }
}))`
  justify-content: center;
  align-items: flex-end;

  position: absolute;
  overflow: hidden;
  top: -110px;

  height: 100px;
  width: 150px;

  box-sizing: border-box;
  border: 2px solid #232b2b;
  border-radius: 5px;
  transition: 0.5s left ease;
`;

export const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`;
