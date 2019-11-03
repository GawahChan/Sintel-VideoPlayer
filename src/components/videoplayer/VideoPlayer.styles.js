import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VideoPlayerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Video = styled(motion.video)`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div``;
