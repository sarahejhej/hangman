import React from 'react';

import Header from '../components/Header';
import HangmanFigure from '../components/HangmanFigure';
import IncorrectLetters from '../components/IncorrectLetters';
import SecretWord from '../components/SecretWord';
import Popup from '../components/Popup';
import Error from '../components/Error';

const HangmanPage = () => {
  return (
    <>
      <Header />
      <HangmanFigure />
      <IncorrectLetters />
      <SecretWord />
      <Popup />
      <Error />
    </>
  );
};

export default HangmanPage;
