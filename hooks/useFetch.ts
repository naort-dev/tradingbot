import React from 'react';

const useFetch = <T>(url: string | null, options: RequestInit) => {
    const [response, setResponse] = React.useState<T | null>(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          if(!url) {
            // Simulating URL call
            const json: T = {"participants":1,"name":"Trading Competition November 2020","start":1606777200000,"end":1612134000000} as any;
            setTimeout(() => setResponse(json), 10000);
            return;
          }
          const res = await fetch(url, options);
          const json: T = await res.json();
          setResponse(json);
          
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return [response, error];
  };

  export default useFetch;