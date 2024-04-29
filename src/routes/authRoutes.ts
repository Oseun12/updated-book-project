import { Router } from "express";
import RouteInterface from "./route.interface";
import * as authController from '../controller/auth.controller';
import { getLogin, postLogin, logout, getSignup, postSignup } from '../controller/auth.controller';
import { Request, Response } from 'express';


export default class AuthRoute implements RouteInterface {
    public router:  Router = Router();
    
    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.get('/login', getLogin as (req: Request, res: Response) => void);
        this.router.post('/login', postLogin);
        this.router.get('/logout', logout);
        this.router.get('/signup', getSignup);
        this.router.post('/signup', postSignup);
    }
}
