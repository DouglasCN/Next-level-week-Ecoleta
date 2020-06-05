import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (request, response) => { 
    return response.json({ message: 'Hello world' })
});
 
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;