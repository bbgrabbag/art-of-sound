import { useState } from 'react';

const useToggler = () => {
  const [on, setToggle] = useState(false);
  const toggle = () => setToggle(!on);

  return { on, toggle }
}

export {
  useToggler
}