// src/services/apiService.ts
import { Post } from 'types/Post';

export async function fetchTestData(): Promise<Post> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const testResponse = await fetch(`http://localhost:3000/api/test?param1=test&param2=anotherTest`);
    if(testResponse.ok) {
        console.log(testResponse.json());
    }
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}