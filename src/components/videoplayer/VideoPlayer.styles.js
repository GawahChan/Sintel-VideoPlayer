import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VideoPlayerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  flex: 1;
`;
