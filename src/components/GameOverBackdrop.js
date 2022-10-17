import React, { useEffect, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';

const GameOverBackdrop = ({
  secretWord,
  playable,
  gameOverStatus,
  onPlayAgain,
}) => {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (gameOverStatus === 'win') {
      setWin(true);
    } else if (gameOverStatus === 'lose') {
      setWin(false);
    }
  }, [gameOverStatus, playable]);

  return (
    <div>
      <Backdrop
        sx={{
          color: win ? 'green' : 'red',
          zIndex: theme => theme.zIndex.drawer + 1,
          textAlign: 'center',
        }}
        onClick={onPlayAgain}
        open={!playable}
      >
        <div>
          <Typography variant="h2" component="h3">
            {win ? 'Congratulations, you won!' : 'You lost!'}
          </Typography>
          <Typography variant="h5" component="h6">
            {!win && `The correct word was ${secretWord.toUpperCase()}`}
          </Typography>
        </div>
      </Backdrop>
    </div>
  );
};

export default GameOverBackdrop;
