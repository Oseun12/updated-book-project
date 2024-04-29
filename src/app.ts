import bcrypt from 'bcryptjs';
import express from "express";
import DatabaseConfig from "./config/database";
import Routes from "./routes/route.interface";
import bodyParser from "body-parser";
import session from "express-session";
import { Redis } from "ioredis";
import { verifyAuthToken } from './middleware/auth';
import { Session } from 'express-session';
import { Request, Response, NextFunction } from 'express'


interface CustomSession extends Session {
    isLoggedIn?: boolean;
}


export default class App {
    public app: express.Application;
    public port: number;

    constructor(routes:Routes[]) {
        this.app = express();
        this.port = 3000;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.connectDatabase();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('app', `App listening on the port ${this.port}`);
        });
    }
    
    public getServer() {
        return this.app;
    }

    

    private initializeMiddlewares() {
        this.app.use(session({
            secret: 'secret',
            resave: false,
            saveUninitialized: true,
        }));

       
        const authenticateUser = (req: Request, res: Response, next: Function) => {
             const customSession = req.session as CustomSession;
            if(customSession.isLoggedIn) {
                console.log('User is authenticated')
                next();
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        };

    
        this.app.use('/signup', authenticateUser);
        this.app.use('/logout', authenticateUser);
        

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        
        

         
    
    }



    private initializeRoutes(routes: Routes[]) {
        console.log('app.initializeRoutes', 'Initializing routes...');
        routes.forEach((route) => {
            this.app.use('', route.router);
        });
    }

    private connectDatabase() {
        const database: DatabaseConfig = new DatabaseConfig();
		database.connect();
	}

}
