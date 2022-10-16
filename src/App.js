import React, { Suspense } from 'react';

import HangmanPage from './containers/HangmanPage';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HangmanPage />
    </Suspense>
  );
}

export default App;
