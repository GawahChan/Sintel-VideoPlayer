import styled from 'styled-components';

export const Icon = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const PlayIcon = styled(Icon)`
  background-image: url(${require('./PlayIcon.svg')});
`;

export const PauseIcon = styled(Icon)`
  background-image: url(${require('./PauseIcon.svg')});
`;

export const FullScreenIcon = styled(Icon)`
  background-image: url(${require('./FullScreenIcon.svg')});
`;

export const SmallScreenIcon = styled(Icon)`
  background-image: url(${require('./SmallScreenIcon.svg')});
`;
