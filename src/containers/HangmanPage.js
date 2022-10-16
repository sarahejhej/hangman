import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header/Header';
import HangmanFigure from '../components/HangmanFigure';
import IncorrectLetters from '../components/IncorrectLetters';
import SecretWord from '../components/SecretWord';
import GameOverBackdrop from '../components/GameOverBackdrop';
import Notification from '../components/Notification';
import Error from '../components/Error/Error';

const HangmanPage = () => {
  return (
    <Container
      display="flex"
      justify-content="center"
      align-items="center"
      sx={{
        maxWidth: '60rem',
        minHeight: '100vh',
        pt: 4,
        pb: 4,
      }}
    >
      <Header />
      <Box
        ml={1}
        mt={4}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        <HangmanFigure />
        <IncorrectLetters />
      </Box>
      <SecretWord />
      <GameOverBackdrop />
      <Notification />
      <Error />
    </Container>
  );
};

export default HangmanPage;
