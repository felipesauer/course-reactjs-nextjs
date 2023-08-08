/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, divRef) {
  return (
    <div
      ref={divRef}
      style={{
        height: '100px',
        width: '100px',
        overflowY: 'scroll',
      }}
    >
      {counted.map((c) => {
        return <p key={`c-${c}`}>{c}</p>;
      })}
    </div>
  );
});
