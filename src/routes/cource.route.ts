import { Router } from 'express';
import { CourceController } from '@controllers';
import { CourceService } from '@services';

const cource = Router();

// controller and service instances
const courceService = new CourceService();
const courceController = new CourceController(courceService);
// end - controller and service instances

cource.use('/', (req, res, next) => {
    next();
});

// routes
cource.get('/', courceController.getCources);
cource.post('/', courceController.getCourcesWithFilter);
cource.get('/:id', courceController.getCourceById);
// end - routes

export default cource;
