import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const TypedElement = ({ messages }) => {
  const [option, setOption] = useState({
    stringsElement: "#typed-strings",
    typeSpeed: 30,
    loop: true,
  });

  useEffect(() => {
    const typed = new Typed("#typed", option);
  }, []);
  return (
    <div className="is-flex">
      <p className="mr-3">I am</p>
      <ul id="typed-strings">
        {messages.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <span id="typed"></span>
    </div>
  );
};

export default TypedElement;
