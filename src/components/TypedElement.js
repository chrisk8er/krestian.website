import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

const TypedElement = ({ messages }) => {
  const [option, setOption] = useState({
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    loop: true,
  });

  useEffect(() => {
    const typed = new Typed('#typed', option);
  }, []);
  return (
    <div className="is-flex is-align-items-baseline">
      <ul id="typed-strings">
        {messages.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <span id="typed" className="subtitle is-3 has-text-light"></span>
    </div>
  );
};

export default TypedElement;
