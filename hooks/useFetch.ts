import React from 'react';

const useFetch = <T>(url: string, options: RequestInit) => {
    const [response, setResponse] = React.useState<T | null>(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json: T = {startDate: "08.12.2019", endDate: "08.01.2020", participants: 78, status: 0} as any;
          //const json: T = await res.json();

          setTimeout(() => setResponse(json), 10000);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return [response, error];
  };

  export default useFetch;