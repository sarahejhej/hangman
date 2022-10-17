import React from 'react';

const HangmanFigure = ({ incorrectLetters }) => {
  const numberOfErrors = incorrectLetters.length;
  return (
    <svg height="240" width="200" stroke="#e4bb7c" fill="none">
      {/* Rod */}
      <line x1="20" y1="230" x2="100" y2="230" />
      <line x1="60" y1="20" x2="60" y2="230" />
      {numberOfErrors > 0 && <line x1="60" y1="20" x2="140" y2="20" />}
      {numberOfErrors > 1 && <line x1="140" y1="20" x2="140" y2="50" />}

      {/* Head */}
      {numberOfErrors > 2 && <circle cx="140" cy="70" r="20" />}

      {/* Body */}
      {numberOfErrors > 3 && <line x1="140" y1="90" x2="140" y2="150" />}

      {/* Arms */}
      {numberOfErrors > 4 && <line x1="140" y1="120" x2="120" y2="100" />}
      {numberOfErrors > 5 && <line x1="140" y1="120" x2="160" y2="100" />}

      {/* Legs */}
      {numberOfErrors > 6 && <line x1="140" y1="150" x2="120" y2="180" />}
      {numberOfErrors > 7 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
  );
};

export default HangmanFigure;
