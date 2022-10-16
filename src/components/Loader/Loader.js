import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { LoaderBox } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderBox>
      <CircularProgress sx={{ color: '#e4bb7c' }} />
    </LoaderBox>
  );
};

export default Loader;
