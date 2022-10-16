import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { SecretWordBox, SecretWordSpan } from './SecretWord.styles';

const SecretWord = ({ secretWord, correctLetters }) => {
  return (
    <>
      <SecretWordBox>
        {secretWord.split('').map((letter, index) => {
          return (
            <SecretWordSpan key={index + letter}>
              {correctLetters.includes(letter) ? letter.toUpperCase() : ''}
            </SecretWordSpan>
          );
        })}
      </SecretWordBox>
    </>
  );
};

export default SecretWord;
