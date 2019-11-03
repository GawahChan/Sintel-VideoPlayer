import React from 'react';
import { LoaderContainer, StyledLoader } from './Loader.style';

function Loader() {
  return (
    <LoaderContainer
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledLoader />
    </LoaderContainer>
  );
}

export default Loader;
