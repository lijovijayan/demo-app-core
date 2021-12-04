import { Router } from 'express';
import { StateController } from '@controllers';
import { StateService } from '@services';

const state = Router();

// controller and service instances
const stateService = new StateService();
const stateController = new StateController(stateService);
// end - controller and service instances

state.use('/', (req, res, next) => {
    next();
});

// routes
state.get('/', stateController.getStates);
state.post('/', stateController.getStatesWithFilter);
state.get('/:id', stateController.getStateById);
// end - routes

export default state;
