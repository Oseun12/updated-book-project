import { Router } from 'express';
import * as bookController from '../controller/book.controller';
import { authBook, checkPermission } from '../middleware/permission';
import { AppRole } from '../model/enums/app.role';
import RouteInterface from './route.interface';
import { deleteBook, updateBook } from '../service/book.service';


export default class BookRoute implements RouteInterface {
    public router:  Router = Router();
    
    constructor() {
        this.initializeRoutes()
    }
    

    public initializeRoutes() {    
        this.router.post('/books', authBook(['AUTHOR', 'EDITOR']), bookController.createBook);
        this.router.put('/books/:id', authBook(['AUTHOR', 'EDITOR']), bookController.updateBook);
        this.router.delete('/books/:id', authBook(['AUTHOR', 'EDITOR']), bookController.deleteBook);
        this.router.get('/books/:id', bookController.getBookById);
        this.router.get('/books',checkPermission(['AUTHOR', 'EDITOR']), bookController.getAllBooks);
    }
}

