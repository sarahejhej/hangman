import React from 'react';

import Typography from '@mui/material/Typography';

import { HeaderBox } from './Header.styles';

const Header = () => {
  return (
    <HeaderBox>
      <Typography variant="h2" component="h1">
        Hangman
      </Typography>
      <Typography variant="h6" component="h2">
        Press any letter key to play!
      </Typography>
    </HeaderBox>
  );
};

export default Header;
