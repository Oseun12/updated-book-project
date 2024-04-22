import express from "express";
import DatabaseConfig from "./config/database";
import Routes from "./routes/route.interface";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(routes:Routes[]) {
        this.app = express();
        this.port = 3000;
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