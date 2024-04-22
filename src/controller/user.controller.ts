import { Request, Response } from 'express';
import { AppRole } from '../model/enums/app.role';
import { UserRequest } from "../model/request/user.request";
import service from '../service/services';


export async function createUser(req: Request, res: Response) {
    try {
        console.log('request', req.body);
        const request: UserRequest = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@rmapl.com',
            username: 'johndoe',
            password: 'password',
            role: AppRole.AUTHOR
        };
        const user = await service.userService.createUser(request);
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).json({ message: "Error creating user" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const request: UserRequest = req.body;
        const id = parseInt(req.params.id);
        const user = await service.userService.updateUser(request, id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: "Error updating user" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const result = await service.userService.deleteUser(id);
        if (result) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(400).json({ message: "Error deleting user" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getUserById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const user = await service.userService.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await service.userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}