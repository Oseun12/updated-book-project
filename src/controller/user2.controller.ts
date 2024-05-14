import { User2 } from './../persistence/entity/user2';
import { Request, Response } from "express";
import { getUsers, createPost, updatePost } from '../service/user2.service';


export async function getUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('GET Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function createPostController(req: Request, res: Response): Promise<void> {
    try {
        const postData = req.body;
        const post = await createPost(postData);
        res.status(201).json(post);
    } catch (error) {
        console.error('POST Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function updatePostController(req: Request, res: Response): Promise<void> {
    try {
        const putData = req.body;
        const updatedPost = await updatePost(putData);
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('PUT Error:', error);
        res.status(500).send('Internal Server Error');
    }
}