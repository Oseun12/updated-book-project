import { Router } from 'express';
import * as bookController from '../controller/book.controller';
import RouteInterface from './route.interface';


/**
 * Here, you can register routes by instantiating the controller.
 *
 */

export default class BookRoute implements RouteInterface {
    public router:  Router = Router();
    
    constructor() {
        this.initializeRoutes()
    }

    public initializeRoutes() {
        this.router.post('/books', bookController.createBook);
        this.router.put('/books/:id', bookController.updateBook);
        this.router.delete('/books/:id', bookController.deleteBook);
        this.router.get('/books/:id', bookController.getBookById);
        this.router.get('/books', bookController.getAllBooks);
    }
}

