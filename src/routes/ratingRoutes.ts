import { Router } from "express";
import * as ratingController from "../controller/rating.controller";
import RouteInterface from "./route.interface";


/**
 * Here, you can register routes by instantiating the controller.
 *
 */
export default class RatingRoute implements RouteInterface {
    public router: Router = Router();

    
    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.post('/rating', ratingController.createRating);
        this.router.put('/rating/:id', ratingController.updateRating);
        this.router.delete('/rating/:id', ratingController.deleteRating);
        this.router.get('/rating/:id', ratingController.averageRating);
    }
}

