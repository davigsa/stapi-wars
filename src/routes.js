import { Router } from 'express';

import CaracterController from './app/controllers/CaracterController';

const routes = new Router();

routes.get('/caracters', CaracterController.index);
routes.post('/caracters', CaracterController.store);
routes.get('/caracters/:id', CaracterController.show);

export default routes;