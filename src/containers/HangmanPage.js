import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header/Header';
import HangmanFigure from '../components/HangmanFigure';
import IncorrectLetters from '../components/IncorrectLetters';
import SecretWord from '../components/SecretWord/SecretWord';
import GameOverBackdrop from '../components/GameOverBackdrop';
import Notification from '../components/Notification';
import Error from '../components/Error/Error';

import { useRandomWord } from '../hooks/useRandomWord';

const MAX_NUMBER_OF_INCORRECT_GUESSES = 8;

const HangmanPage = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [gameOverStatus, setGameOverStatus] = useState('');

  const { data, error } = useRandomWord();

  const secretWord = data && data.word;
  useEffect(() => {}, [playable]);

  const handleKeyDown = event => {
    const { key, keyCode } = event;
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();

      if (secretWord && secretWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(preValue => [...preValue, letter]);
        } else {
          setShowNotification(true);
        }
      } else {
        if (!incorrectLetters.includes(letter)) {
          setIncorrectLetters(preValue => [...preValue, letter]);
        } else {
          setShowNotification(true);
        }
      }
    }
  };

  useEffect(
    event => {
      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
    },
    [correctLetters, incorrectLetters, playable]
  );

  const checkGame = () => {
    if (
      secretWord &&
      secretWord.split('').every(letter => correctLetters.includes(letter))
    ) {
      setGameOverStatus('win');
      setPlayable(false);
    }
    if (incorrectLetters.length === MAX_NUMBER_OF_INCORRECT_GUESSES) {
      setPlayable(false);
      setGameOverStatus('lose');
    }
  };

  useEffect(() => {
    checkGame();
  }, [correctLetters, incorrectLetters]);

  const handlePlayAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setIncorrectLetters([]);
  };

  return (
    <Container
      sx={{
        maxWidth: '60rem',
        minHeight: '100vh',
        pt: 4,
        pb: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Header />
      {error ? (
        <Error />
      ) : (
        <>
          <Box
            ml={1}
            mt={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              margin: '3rem',
            }}
          >
            <HangmanFigure incorrectLetters={incorrectLetters} />
            <IncorrectLetters incorrectLetters={incorrectLetters} />
          </Box>
          {secretWord ? (
            <>
              <SecretWord
                secretWord={secretWord}
                correctLetters={correctLetters}
              />
              <GameOverBackdrop
                secretWord={secretWord}
                playable={playable}
                gameOverStatus={gameOverStatus}
                onPlayAgain={handlePlayAgain}
              />
            </>
          ) : null}
          <Notification
            showNotification={showNotification}
            onClose={setShowNotification}
          />
        </>
      )}
    </Container>
  );
};

export default HangmanPage;
