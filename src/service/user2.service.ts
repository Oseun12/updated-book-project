import axios, { AxiosResponse } from 'axios'
import { Post } from '../persistence/entity/user2';

export async function getUsers(): Promise<void> {
    try {
        const response: AxiosResponse<Post[]> = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/users');
        console.log('GET Response:', response.data);
    } catch (error) {
        console.error('GET Error:', error);
    }
}

// Function to make a POST request
export async function createPost(postData: Post): Promise<void> {
    try {
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1
          };
        const response: AxiosResponse<Post> = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', postData);
        console.log('POST Response:', response.data);
    } catch (error) {
        console.error('POST Error:', error);
    }
}

// Function to make a PUT request
export async function updatePost(putData: Post): Promise<void> {
    try {
        const putData = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
          };
        const response: AxiosResponse<Post> = await axios.put<Post>('https://jsonplaceholder.typicode.com/posts/1', putData);
        console.log('PUT Response:', response.data);
    } catch (error) {
        console.error('PUT Error:', error);
    }
}














// export async function fetchData() {
//     try {
//         const postData: Post = {
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         };

//         const putData: Post = {
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//           };

//         const getUser2Response: AxiosResponse<User2[]> = await axios.get<User2[]>('https://jsonplaceholder.typicode.com/users');
//         console.log('GET Response:', getUser2Response.data);

//         const createPostResponse: AxiosResponse<Post> = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', postData);
//         console.log('POST Response:', createPostResponse.data);
       
//         const updatePostResponse: AxiosResponse<Post> = await axios.put<Post>('https://jsonplaceholder.typicode.com/posts/1', putData);
//         console.log('PUT Response:', updatePostResponse.data);
        
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchData();
