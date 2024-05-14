import { Router } from "express";
import * as ratingController from "../controller/rating.controller";
import { authBook, checkPermission } from '../middleware/permission';
import RouteInterface from "./route.interface";


export default class RatingRoute implements RouteInterface {
    public router: Router = Router();
    
    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.post('/rating', authBook(['REVIEWER', 'PUBLISHER']), ratingController.createRating);
        this.router.put('/rating/:id', authBook(['REVIEWER','PUBLISHER']), ratingController.updateRating);
        this.router.delete('/rating/:id', authBook(['REVIEWER', 'PUBLISHER']), ratingController.deleteRating);
        this.router.get('/rating/:id', authBook(['REVIEWER', 'PUBLISHER']), ratingController.averageRating);
    }
}

