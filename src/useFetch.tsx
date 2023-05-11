import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                if (isMounted) setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return data;
}
