import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';

const GameOverBackdrop = () => {
  const handleClose = () => {};

  return (
    <div>
      <Backdrop
        sx={{ color: 'red', zIndex: theme => theme.zIndex.drawer + 1 }}
        onClick={handleClose}
      >
        <div>
          <Typography variant="h1" component="h2">
            You lost!
          </Typography>
          <Typography variant="h5" component="subtitle1">
            The correct word was ELEPHANT!
          </Typography>
        </div>
      </Backdrop>
    </div>
  );
};

export default GameOverBackdrop;
