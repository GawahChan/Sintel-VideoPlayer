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
  background-image: url(${require('./icons/PlayIcon.svg')});
`;

export const PauseIcon = styled(Icon)`
  background-image: url(${require('./icons/PauseIcon.svg')});
`;

export const FullScreenIcon = styled(Icon)`
  background-image: url(${require('./icons/FullScreenIcon.svg')});
`;

export const SmallScreenIcon = styled(Icon)`
  background-image: url(${require('./icons/SmallScreenIcon.svg')});
`;
