import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setLoading(true);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    
    fetchData();
    
  }, [url]);
  
  return { response, error, loading };
};
