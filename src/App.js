import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./components/Warning'));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, world!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      {count > 10 && (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      )}
    </>
  );
};

export default hot(module)(App);
