import { Router } from "express";
import * as userController from '../controller/user2.controller';
import RouteInterface from './route.interface';

export default class UserRoute implements RouteInterface {
    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get('/users', userController.getUsersController);
        this.router.post('posts', userController.createPostController);
        this.router.put('/posts/:id', userController.updatePostController)
    }
}

