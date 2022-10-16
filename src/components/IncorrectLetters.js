import React from 'react';
import Typography from '@mui/material/Typography';

const IncorrectLetters = ({ incorrectLetters }) => {
  const incorrectLettersString = incorrectLetters.join(', ').toUpperCase();
  return (
    <div>
      {incorrectLetters.length ? (
        <>
          <Typography variant="h5" component="h3">
            Incorrect Letters:
          </Typography>
          <Typography variant="h6" component="p">
            {incorrectLettersString}
          </Typography>
        </>
      ) : null}
    </div>
  );
};

export default IncorrectLetters;
