import { Request, Response } from 'express';
import { getUsers, createPosts, updateUsers } from '../service/user3.service';

export async function getUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('GET Error:', error);
        res.status(500).send('Internal Server Error')
    }
}

export async function postUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await createPosts();
        res.status(200).json(users);
    } catch (error) {
        console.error('POST Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function updateUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await updateUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('PUT  Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

export function createPostsController(arg0: string, createPostsController: any) {
    throw new Error('Function not implemented.');
}
