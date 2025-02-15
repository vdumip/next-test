import { useEffect, useState } from 'react';
import { fetchTestData } from 'services/apiService';

export default function TestPage() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTestData()
            .then(setData)
            .catch(setError);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div>
            <h1>Test Data</h1>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}