import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';

import HangmanPage from './containers/HangmanPage';
import Loader from './components/Loader/Loader';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <SWRConfig
          value={{
            suspense: true,
          }}
        ></SWRConfig>
        <HangmanPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
