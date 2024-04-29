import { Router } from 'express';
import * as userController from '../controller/user.controller';
import RouteInterface from './route.interface';


/**
 * Here, you can register routes by instantiating the controller.
 *
 */
export default class UserRoute implements RouteInterface {
	public router: Router = Router();


	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes() {
		this.router.post('/users', userController.createUser);
		this.router.put('/users/:id', userController.updateUser);
		this.router.delete('/users/:id', userController.deleteUser);
		this.router.get('/users/:id', userController.getUserById);
		this.router.get('/users', userController.getAllUsers);
	}

}

