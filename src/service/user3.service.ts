import { Post } from '../persistence/entity/user2';



export async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log('GET Response:', data);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });
}

export async function createPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('POST Response:', data);
    })
    .catch(error => {
        console.error('POST Error:', error);
    });
}

export async function updateUsers() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('PUT Response:', data);
    })
    .catch(error => {
        console.error('PUT Error:', error);
    });
}