import styled from 'styled-components';

export const ControlsContainer = styled.div.attrs(props => ({
  style: {
    bottom: props.displayControls ? '0px' : '-350px'
  }
}))`
  position: absolute;
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  transition: bottom 1.5s ease;
  overflow: hidden;
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
`;
