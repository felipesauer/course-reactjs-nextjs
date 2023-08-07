/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    setLoading(true);

    let wait = false;

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
        }
        throw error;
      }
    };

    fetchData();

    return () => {
      wait = false;
    };
  }, []);

  return [result, loading];
};

export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', {
    header: {
      abs: '1',
    },
  });

  if (loading) return <p>Loading...</p>;

  if (!loading && result) console.log(result);

  return <h1>Oi</h1>;
};
