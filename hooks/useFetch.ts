import React from 'react';

const useFetch = <T>(url: string | null, options: RequestInit) => {
    const [response, setResponse] = React.useState<T | null>(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          if(!url) {
            // Simulating URL call
            const json: T = {startDate: "08.12.2019", endDate: "08.01.2020", participants: 78, status: 0} as any;
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