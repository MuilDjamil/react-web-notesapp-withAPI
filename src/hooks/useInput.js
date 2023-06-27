import React from 'react';

const useInput = (value = '') => {
  const [input, setInput] = React.useState(value);

  const setInputValue = (event) => {
    setInput(event.target.value);
  };

  return [input, setInputValue];
}

export default useInput;