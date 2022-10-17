import React from 'react';

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
