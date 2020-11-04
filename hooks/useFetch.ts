import React from 'react';

const useFetch = <T>(url: string, options: RequestInit) => {
    const [response, setResponse] = React.useState<T | null>(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
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
