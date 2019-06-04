import React from 'react';
import Counter from './Counter';
import UseInput from './UseInput';

function App() {
  const validate = value => (
    value.length <= 10 && !value.includes("@")
  );
  const name = UseInput("Mr.", validate);
  return (
    <>
      <Counter />
      <input placeholder="Name" {...name} />
    </>
  );
}

export default App;
