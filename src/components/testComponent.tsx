'use client';

import { useEffect, useState } from 'react';
import { fetchTestData } from 'services/apiService';
import { Post } from "types/Post";

export default function TestComponent() {
    const [data, setData] = useState<Post[]>([]);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        fetchTestData()
            .then((data: Post[]) => setData(data))
            .catch(setError);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div>
            <h1>Test Data</h1>
            <ul>
                {data.map((item: Post) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}